import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const CONTACT_TYPE = 'contact_type'
export const TIMELINE_TYPE = 'timeline_type'

type ModeType = 'contact_type' | 'timeline_type'

export const useTimeLineView = () => {
	const navigation = useNavigation();
	const [mode,setMode] = useState<ModeType>(TIMELINE_TYPE)

	const back = () => navigation.goBack()

	return{
		back,
		changeMode: setMode,
		mode
	}
}