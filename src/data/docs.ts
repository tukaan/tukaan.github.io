export type DocsMap = {
	name: string;
	keywords?: string;
	path?: string;
	type?: "page" | "category";
	pages?: DocsMap[];
};

export const docs: DocsMap[] = [
	{
		name: "Get started",
		path: "",
		keywords: "install start"
	},
	{
		type: "category",
		name: "The fundamentals",
		pages: [
			{
				name: "Hello world!",
				path: "/basics/hello",
				keywords: "start hello basics"
			},
			{
				type: "category",
				name: "Basic widgets",
				pages: [
					{
						name: "Static text",
						path: "/basics/widgets/label",
						keywords: "label text static"
					},
					{
						name: "Buttons",
						path: "/basics/widgets/button",
						keywords: "button btn onclick callback command press"
					},
					{
						name: "Checkbox",
						path: "/basics/widgets/checkbox",
						keywords: "on off check switch"
					},
					{
						name: "Radio buttons",
						path: "/basics/widgets/radiobutton",
						keywords: "radiobuttons select options"
					},
					{
						name: "Text input",
						path: "/basics/widgets/textbox",
						keywords: "entry textbox input"
					},
				]
			},
			{
				name: "Dynamic layouts",
				path: "/basics/grid",
				keywords: "grid layouts dynamic resize responsive"
			},
		]
	},
	{
		type: "category",
		name: "Beyond the basics",
		pages: [
			{
				name: "Event handling",
				path: "/misc/events",
				keywords: "events drag drop mouse keyboard keypress handler"
			},
			{
				name: "Multiple windows",
				path: "/misc/windows",
				keywords: "multiple windows toplevel"
			},
			{
				name: "Widget tooltips",
				path: "/misc/tooltips"
			},
			{
				name: "Dialogs",
				path: "/misc/dialogs",
				keywords: "dialog messagebox selector chooser picker color file date calendar about popup"
			},
			{
				name: "Sleeping and scheduling",
				path: "/misc/timing",
				keywords: "timing timer schedule scheduling sleep delay timeout wait pending countdown"
			},
			{
				name: "Absolute positioning",
				path: "/misc/absolute",
				keywords: "absolute position geometry place coordinate"
			},
			{
				name: "Drag and drop",
				path: "/misc/dnd",
				keywords: "events drag drop file"
			},
		]
	},
	{
		type: "category",
		name: "More widgets",
		pages: [
			{
				name: "Rich text",
				path: "/more/textview",
				keywords: "rich text edit insert undo redo index"
			},
			{
				name: "Canvas graphics",
				path: "/more/canvas",
				keywords: "draw graphics gfx canvas gradient transform translate rotate scale image"
			},
		]
	},
	{
		type: "category",
		name: "Complex layouts",
		pages: [
			{
				name: "Grid tips and tricks",
				path: "/layouts/mastering-grid",
				keywords: "grid complex layouts best practices tips tricks"
			},
			{
				name: "Working with tabs",
				path: "/layouts/tabview",
				keywords: "tab view tabview notebook"
			},
			{
				name: "Split panes",
				path: "/layouts/splitview",
				keywords: "split view panes paned window"
			},
		]
	},
	{
		type: "category",
		name: "Theming",
		pages: [
			{
				name: "Using themes",
				path: "/themes/themes",
				keywords: "themes custom look and feel"
			},
			{
				name: "Creating themes",
				path: "/themes/create",
				keywords: "create themes custom look and feel"
			},
		]
	},
	{
		type: "category",
		name: "Advanced topics",
		pages: [
			{
				name: "Concurrency",
				path: "/advanced/concurrency",
				keywords: "concurrency async"
			},
			{
				name: "Behind the scenes",
				path: "/advanced/behind-the-scenes",
				keywords: "tukaan behind scenes internal tcl tk"
			},
			{
				name: "For Tukaan devs",
				path: "/advanced/for-developers",
				keywords: "tukaan development developer devs tcl tk"
			},
		]
	}
];
