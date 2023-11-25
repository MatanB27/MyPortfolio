import { useState } from "react";

export default function NavigationManager(props) {
    const [screensStack, setScreensStack] = useState([]);

    const getScreensStack = () => screensStack
    const getCurrentScreen = () => screensStack.length > 0 && screensStack[screensStack.length - 1]

    const isScreenExists = (screen) => screensStack.includes(screen);
    
    const isStackExists = () => screensStack.length > 1;

    const pushScreen = screen => {
        if(!isScreenExists(screen)) {
            setScreensStack(prev => [...prev, screen]);
        }
    }

    const pullScreen = () => {
        if (screensStack.length > 0) {
            const newStack = [...screensStack];
            newStack.pop();
            setScreensStack(newStack);
        }
    }

    return {getScreensStack, pushScreen, pullScreen, getCurrentScreen, isScreenExists ,isStackExists};
}