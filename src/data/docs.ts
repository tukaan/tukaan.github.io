export type DocsMap = {
	name: string;
	path?: string;
	type?: "page" | "category";
	pages?: DocsMap[];
};

export const docs: DocsMap[] = [
	{
		name: "Overview",
		path: ""
	},
	{
		type: "category",
		name: "The basics",
		pages: [
			{
				name: "Let's get started",
				path: "/basics/get-started"
			},
			{
				name: "Displaying text",
				path: "/basics/label"
			},
			{
				name: "Buttons",
				path: "/basics/button"
			},
			{
				name: "Getting text input",
				path: "/basics/textbox"
			},
			{
				name: "Working with tabs",
				path: "/basics/tabview"
			}, 
			{
				name: "Separating widgets",
				path: "/basics/separator"
			}
		]
	},
	{
		type: "category",
		name: "Miscellaneous",
		pages: [
			{
				name: "Event handling",
				path: "/misc/events"
			},
			{
				name: "Timing and scheduling functions",
				path: "/misc/timing"
			},
			{
				name: "Widget tooltips",
				path: "/misc/tooltips"
			}
		]
	},
	{
		type: "category",
		name: "Advanced",
		pages: [
			{
				name: "Blocking the event loop",
				path: "/advanced/blocking"
			},
		]
	}
];
