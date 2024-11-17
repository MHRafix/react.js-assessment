// colors variant
export const colors: IColorsType[] = [
	{
		color_deep: '#4CB3FD',
		color_light: '#E5F2FF',
		btn_hover_color: '#1884D1',
	},
	{
		color_deep: '#ffb72c',
		color_light: '#FFF0D9',
		btn_hover_color: '#D69312',
	},
	{
		color_deep: '#68cb9b',
		color_light: '#DBF3E7',
		btn_hover_color: '#40a373',
	},
	{
		color_deep: '#b78deb',
		color_light: '#E5F2FF',
		btn_hover_color: '#6E41A6',
	},
];

// type of colors
export interface IColorsType {
	color_deep: string;
	color_light: string;
	btn_hover_color: string;
}
