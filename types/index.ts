export interface ChildProps {
	children: React.ReactNode;
}

export interface FeaturedProjectCardProps {
	project: FeaturedProject;
}

export interface Certificate {
	image: string;
	title: string;
	description: string;
	link: string;
	see: string;
	skills?: {
		title: string;
	}[];
}

export interface ProjectSkill {
	title: string;
	icon: string;
}

export interface FeaturedProject {
	title: string;
	img: string;
	weblink: string;
	gitlink: string;
	skills: ProjectSkill[];
}

type EduSkill = {
	title: string;
};

type Button = {
	title: string;
	link: string;
};

export type Education = {
	company: string;
	link: string;
	role: string;
	date: string;
	logo: string;
	desc?: string;
	sdesc?: string;
	certificate?: string;
	ctitle?: string;
	cdesc?: string;
	skills?: EduSkill[];
	btn?: Button[];
};

export interface Certificate {
	title: string;
	description: string;
	image: string;
	link: string;
	see: string;
	skills?: {
		title: string;
	}[];
}

export interface Projects {
	title: string;
	description: string;
	image: string;
	link: string;
	gitlink: string;
	skills?: {
		title: string;
	}[];
}

interface Skill {
	name: string;
	icon: string;
}

export interface Project {
	img: string;
	title: string;
	skills?: Skill[]; // skills massiv bo'lishi aniq
}
export interface ICategory {
	label: string;
	icon: string;
}

export interface IInstructor {
	name: string;
	image: string;
	job: string;
}

export interface IAuthor {
	name: string;
	image: { url: string };
	bio: string;
	blogs: IBlog[];
	id: string;
}

export interface ICategoryAndTags {
	name: string;
	slug: string;
	blogs: IBlog[];
}

export interface IBlog {
	title: string;
	description: string;
	author: IAuthor;
	category: ICategoryAndTags;
	tag: ICategoryAndTags;
	image: { url: string };
	createdAt: string;
	content: { html: string };
	slug: string;
}
export interface UserCardProps {
	title: string;
}
