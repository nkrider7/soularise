import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Heading from "../ui/Heading";

const reviews = [
	{
		username: "@jack",
		img: "https://cdn.dribbble.com/userupload/29026275/file/original-2f05f474069c58aebc4b09a092b1217e.png?resize=1024x768&vertical=center",
	},
	{
		username: "@jill",
		img: "https://cdn.dribbble.com/userupload/23531650/file/original-1075a0a98953616197ca3853a27fa1e2.jpg?resize=752x564&vertical=center",
	},
	{
		username: "@john",
		img: "https://cdn.dribbble.com/userupload/24740449/file/original-4302effc1d080e710bda1da49d0190e7.png?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@kane",
		img: "https://cdn.dribbble.com/userupload/27937147/file/original-d8e9899a4462a27e2a881f0bb335f383.jpg?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@nka",
		img: "https://cdn.dribbble.com/userupload/23474978/file/original-464a614ea2c94c039e75f8c1654f9abf.gif",
	},
	{
		username: "@jenny",
		img: "https://cdn.dribbble.com/users/2586416/screenshots/6344067/2k_indian_woman_in_full_growth_pocessing_4x.jpg?resize=768x576&vertical=center",
	},
	{
		username: "@james",
		img: "https://cdn.dribbble.com/userupload/27976475/file/original-94f4b5c5a1cbc6417b6df95066a1a7a1.jpg?format=webp&resize=320x240&vertical=center",
	},
	{
		username: "@klsa",
		img: "https://cdn.dribbble.com/userupload/39705863/file/original-263c6b7e4397197c37d970ffbc2efc4b.png?resize=1024x768&vertical=center",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
}: {
	img: string;
}) => {
	return (
		<Image className="rounded-lg" width={300} height={300} alt="" src={img} />
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col py-2 items-center justify-center overflow-hidden">
			<Heading>We Are Working with</Heading>
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((item) => (
					<ReviewCard key={item.username} {...item} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((item) => (
					<ReviewCard key={item.username} {...item} />
				))}
			</Marquee>
			
		</div>
	);
}
