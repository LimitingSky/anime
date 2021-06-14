import coreRequest from "api";

export const getSearchData = async (mode:string,params:object={}) => {
	const url = `/${mode}/`
	return coreRequest({
		url,
		params
	})
}