"use client";

import {useEffect, useRef, useState} from "react";
import {typeLine} from "@/utils/typeLine";
import {puzzles} from "@/game/puzzles";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation";

export default function Terminal() {
    const [lines, setLines] = useState<string[]>([
        "NASA HACK SIMULATOR (FICTIONAL)",
        "Type 'help' to see available commands.",
    ]);
    const router = useRouter();
    const bottomRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState("");
    const [isHacking, setIsHacking] = useState(false);
    const [rank, setRank] = useState(0);
    const [ctfIndex, setCtfIndex] = useState(0);
    const ranks = ["Script Kiddie", "Junior Hacker", "Cyber Specialist", "Space Hacker 🚀", "Galactic Overlord 👽"];
    const [awaitingAnswer, setAwaitingAnswer] = useState(false);
    const [hackProgress, setHackProgress] = useState(0);
    const [audioUnlocked, setAudioUnlocked] = useState(false);

    useEffect(() => {
        const unlock = () => setAudioUnlocked(true);
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
        return () => {
            window.removeEventListener("click", unlock);
            window.removeEventListener("keydown", unlock);
        };
    }, []);

    const playSound = (src: string, volume: number = 0.2) => {
        if (!audioUnlocked) {
            return;
        }
        const audio = new Audio(src);
        audio.volume = volume;
        void audio.play();
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lines]);

    useEffect(() => {
        (async () => {
            await typeLine("███╗   ██╗ █████╗ ███████╗ █████╗", setLines, 5);
            await typeLine("████╗  ██║██╔══██╗██╔════╝██╔══██╗", setLines, 5);
            await typeLine("██╔██╗ ██║███████║███████╗███████║", setLines, 5);
            await typeLine("██║╚██╗██║██╔══██║╚════██║██╔══██║", setLines, 5);
            await typeLine("██║ ╚████║██║  ██║███████║██║  ██║", setLines, 5);
            await typeLine("╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝", setLines, 5);
            await typeLine("        HACK SIMULATOR", setLines, 10);
            await typeLine("", setLines);
            await typeLine("Type 'help' to see available commands.", setLines);
            playSound("/sound/type-writing-6834.mp3", 0.15);
        })();
    }, []);

    const showHelp = async () => {
        await typeLine("SYSTEM ONLINE.", setLines);
        await typeLine("Limited commands available.", setLines);
        await typeLine("", setLines);
        await typeLine("Try:", setLines);
        await typeLine("- status", setLines);
        await typeLine("- start_attack_simulation", setLines);
        await typeLine("- clear", setLines);
        await typeLine("", setLines);
        await typeLine("Hint: some commands are hidden.", setLines);
        playSound("/sound/type-writing-6834.mp3", 0.15);
    }

    const addLine = (text: string) => {
        setLines((prev) => [...prev, text]);
    };

    const handleCommand = async (cmd: string) => {
        addLine(`> ${cmd}`);
        if (awaitingAnswer && cmd.startsWith("answer ")) {
            await checkAnswer(cmd.replace("answer ", ""));
            return;
        }
        if (isHacking) {
            addLine("System busy... please wait.");
            return;
        }
        switch (cmd) {
            case "help":
                await showHelp();
                break;

            case "solve_ctf":
                await startCTF();
                break;

            case "start_attack_simulation":
                await startHackSimulation();
                break;

            case "status":
                await typeLine(`RANK: ${ranks[rank]}`, setLines);
                await typeLine(`CTF Level: ${ctfIndex} / ${puzzles.length}`, setLines);
                await typeLine(`SYSTEM STATUS: ${isHacking ? "HACKING..." : "IDLE"}`, setLines);
                break;

            case "clear":
                setLines([]);
                break;

            case "sudo make me a hacker":
                await typeLine("Permission granted 😎", setLines);
                await typeLine("You're now a legend! 🚀", setLines);
                break;

            case "hack_the_planet":
                await typeLine("🌍 PLANET HACKED (SIM)", setLines);
                break;

            case "coffee":
                await typeLine("☕ Brewing coffee... Done.", setLines);
                break;

            default:
                await typeLine("Unknown command. Type 'help'.", setLines);
        }
    };

    const startHackSimulation = async () => {
        if (isHacking) {
            return;
        }
        setIsHacking(true);
        setHackProgress(0);
        await typeLine("Initializing attack sequence...", setLines);
        playSound("/sound/type-writing-6834.mp3");
        await typeLine("Target: NASA_SYSTEM_SIM_v1", setLines);
        await typeLine("Bypassing firewall...", setLines);
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress < 100) {
                setHackProgress(progress);
                addLine(`Hacking NASA [${progress}%]`);
                if (Math.random() > 0.75) {
                    addLine("⚠ WARNING: TRACE DETECTED");
                    playSound("/sound/chime-alert-demo-309545.mp3", 0.4);
                    addLine("Evading...");
                    addLine("Trace lost ✔");
                }
            } else {
                progress = 100;
                setHackProgress(100);
                setTimeout(() => {router.push("/dashboard");}, 2000);
                addLine(`Hacking NASA [${progress}%]`);
                addLine("ACCESS GRANTED 🚀");
                addLine("Simulation complete.");
                clearInterval(interval);
                setIsHacking(false);
            }
        }, 800);
    };

    const startCTF = async () => {
        const puzzle = puzzles[ctfIndex];
        if (!puzzle) {
            await typeLine("No more CTF challenges available 🎉", setLines);
            return;
        }
        await typeLine("CTF CHALLENGE:", setLines);
        await typeLine(puzzle.question, setLines);
        addLine("Answer using: answer <text>");
        setAwaitingAnswer(true);
    };

    const checkAnswer = async (answer: string) => {
        const puzzle = puzzles[ctfIndex];
        if (!puzzle) {
            return;
        }
        if (answer.toUpperCase() !== puzzle.answer.toUpperCase()) {
            await typeLine("Wrong answer ❌ Try again.", setLines);
        } else {
            await typeLine("Correct ✔", setLines);
            await typeLine("CTF COMPLETED 🏁", setLines);
            const newRank = Math.min(rank + 1, ranks.length - 1);
            setRank(newRank);
            await typeLine(`RANK UP ⬆ → ${ranks[newRank]}`, setLines);
            setCtfIndex((i) => i + 1);
            setAwaitingAnswer(false);
        }
    };

    return (
        <div className="terminal">
            <div className="terminal-output">
                {isHacking && <ProgressBar progress={hackProgress} />}
                {lines.map((line, i) => (
                    <div key={i}>
                        {line}
                        {i === lines.length - 1 && <span className="cursor">▮</span>}
                    </div>
                ))}
            </div>

            <input
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        void handleCommand(input.trim());
                        playSound("/sound/type-writing-6834.mp3");
                    }
                }}
                placeholder="type command..."
                autoFocus
            />
        </div>
    );
}