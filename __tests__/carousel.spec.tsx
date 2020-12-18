import React, { MouseEvent } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Carousel } from '../src/components/carousel';
import { defaultProps } from '../src/components/carousel/defaultProps';
import { carouselItemNodes, dynamicCarouselItemNodes } from './__fixtures__/nodes';
import * as helpers from '../src/helpers';
import { SlideDirection } from '../src/types/carousel';

describe('<Carousel />', () => {
	let mockGetPageX: jest.SpyInstance<
		number,
		[React.TouchEvent<Element> | React.MouseEvent<Element, globalThis.MouseEvent>]
	>;

	afterEach(() => {
		mockGetPageX.mockRestore();
		jest.clearAllTimers();
		jest.resetAllMocks();
		cleanup();
	});

	beforeEach(() => {
		Element.prototype.getBoundingClientRect = jest.fn(() => {
			return {
				width: 900,
				height: 600,
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				x: 0,
				y: 0,
				toJSON: jest.fn(),
			};
		});
		jest.useFakeTimers();
		mockGetPageX = jest
			.spyOn(helpers, 'getPageX')
			.mockImplementation((_: MouseEvent) => 600);
	});

	it('should render right layout', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={false}
				children={carouselItemNodes(6)}
			/>,
		);
		const carousel = getByTestId('carousel');

		expect(carousel.firstChild);
		expect(carousel.firstChild!.firstChild).toBeTruthy();
		expect(carousel.firstChild!.firstChild!.firstChild).toBeTruthy();
		expect(carousel.firstChild!.firstChild!.firstChild).toBeTruthy();
	});

	it('should transform when pressing arrow keys', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				children={carouselItemNodes(6)}
				useArrowKeys={true}
			/>,
		);
		const carousel = getByTestId('carousel');

		fireEvent.click(carousel);
		fireEvent.keyDown(carousel, { keyCode: 39 });
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it("shouldn't listen keyboard event if useArrowKeys option false", async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				children={carouselItemNodes(6)}
				useArrowKeys={false}
			/>,
		);
		const carousel = getByTestId('carousel');

		fireEvent.click(carousel);
		fireEvent.keyDown(carousel, { keyCode: 39 });

		expect(setTimeout).toHaveBeenCalledTimes(0);
	});

	it("shouldn't slide to left if carousel not infinite and shows first item", async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={false}
				useArrowKeys={true}
				children={carouselItemNodes(4)}
			/>,
		);
		const carousel = getByTestId('carousel');

		fireEvent.click(carousel);
		fireEvent.keyDown(carousel, { keyCode: 37 });

		expect(setTimeout).toHaveBeenCalledTimes(0);
	});

	it("shouldn't do anything if press a key that different from arrow keys", async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={false}
				useArrowKeys={true}
				children={carouselItemNodes(4)}
			/>,
		);
		const carousel = getByTestId('carousel');

		fireEvent.click(carousel);
		fireEvent.keyDown(carousel, { keyCode: 317 });

		expect(setTimeout).toHaveBeenCalledTimes(0);
	});

	it('should slide to left when click left button', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				children={carouselItemNodes(4)}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it('should slide to right when click right button', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				children={carouselItemNodes(4)}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelectorAll('button')[1];

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it('should slide back when swiping is done', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				swiping={true}
				children={carouselItemNodes(12)}
			/>,
		);
		const trackList = getByTestId('trackList');

		mockGetPageX = jest
			.spyOn(helpers, 'getPageX')
			.mockImplementation((_: MouseEvent) => 600);

		fireEvent.mouseDown(trackList, { pageX: 600 });

		mockGetPageX = jest
			.spyOn(helpers, 'getPageX')
			.mockImplementation((_: MouseEvent) => 390);

		fireEvent.mouseMove(trackList, { pageX: 390 });
		fireEvent.mouseUp(trackList, { pageX: 390 });
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it('should slide back when swiping is done and drag size less than item size', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				swiping={true}
				show={5}
				children={carouselItemNodes(10)}
			/>,
		);
		const trackList = getByTestId('trackList');

		mockGetPageX = jest
			.spyOn(helpers, 'getPageX')
			.mockImplementation((_: MouseEvent) => 600);

		fireEvent.mouseDown(trackList, { pageX: 600 });

		mockGetPageX = jest
			.spyOn(helpers, 'getPageX')
			.mockImplementation((_: MouseEvent) => 190);

		fireEvent.mouseMove(trackList, { pageX: 190 });
		fireEvent.mouseUp(trackList, { pageX: 190 });
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it("shouldn't rotate items if carousel is not infinite", async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={false}
				children={carouselItemNodes(10)}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it('should rotate items if carousel is infinite', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				children={carouselItemNodes(10)}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(
			expect.any(Function),
			defaultProps.transition * 1000,
		);
	});

	it('should render stateful items when dynamic prop is true', async () => {
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				dynamic={true}
				infinite={true}
				children={dynamicCarouselItemNodes()}
			/>,
		);

		const carousel = getByTestId('trackList');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);

		expect(button!.innerHTML).toEqual('1');
	});

	it('should invoke beforeChange when beforeChange prop is defined on slide', async () => {
		const onBeforeChange = (direction: SlideDirection) => {
			console.log(direction);
		};
		const stub = jest.fn(onBeforeChange);
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				children={carouselItemNodes(4)}
				beforeChange={stub}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(stub).toHaveBeenCalledTimes(1);
	});

	it('should invoke afterChange when afterChange prop is defined on slide', async () => {
		const onAfterChange = (direction: SlideDirection) => {
			console.log(direction);
		};
		const stub = jest.fn(onAfterChange);
		const { getByTestId } = render(
			<Carousel
				{...defaultProps}
				infinite={true}
				children={carouselItemNodes(4)}
				afterChange={stub}
			/>,
		);
		const carousel = getByTestId('carousel');
		const button = carousel.querySelector('button');

		expect(button).not.toBeNull();

		fireEvent.click(button!);
		jest.runAllTimers();

		expect(stub).toHaveBeenCalledTimes(1);
	});
});
