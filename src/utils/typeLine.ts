import React from "react";

export async function typeLine(
    text: string,
    setLines: React.Dispatch<React.SetStateAction<string[]>>,
    speed = 30
) {
    setLines((prev) => [...prev, ""]);

    for (let i = 0; i < text.length; i++) {
        await new Promise((r) => setTimeout(r, speed));

        setLines((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = text.slice(0, i + 1);
            return copy;
        });
    }
}