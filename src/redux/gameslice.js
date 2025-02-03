        import { createSlice } from "@reduxjs/toolkit";
        import Editgame from "../components/Editgame";

        export const gameSlice = createSlice({
        name: "game",
        initialState: {
            gamelist: [
            {
                id: Math.random(),
                name: "Valheim",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg?t=1732095031",
                description:
                "A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin’s patronage!",
                link: "https://bowfile.com/kgwW",
                links:"link",
                fixs:"fix",
                fix: "https://bowfile.com/egLb?pt=SFVKZkJ3bFdBZXZSYVJRSGZhaStHRU5qU1c5eFIxZDRkV3BQTlV0SU16TnpWVnBwTlhjOVBRPT0%3D",
            },
            {
                id: Math.random(),
                name: "Phasmophobia",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg?t=1727019976",
                description:
                "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.",
                link: "https://bowfile.com/bpV3",
                links:"link",
                fixs:"fix",
                fix: "https://bowfile.com/o0mv",
            },
            {
                id: Math.random(),
                name: "Grounded",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/962130/header.jpg?t=1727719725",
                description:
                "The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?",
             link:"https://1cloudfile.com/27ago",
             links:"link",
             fixs:"fix",
             link2:"https://1cloudfile.com/27agn",
                fix:"https://bowfile.com/olvN"
            },
            {
                id: Math.random(),
                name: "Dying light 2",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg?t=1734042129",
                description:
                "Humanity is fighting a losing battle against the virus. Experience a post-apocalyptic open world overrun by hordes of zombies, where your parkour and combat skills are key to survival. Traverse the City freely during the day, but watch the monsters take over during the night.",
            },
            {
                id: Math.random(),
                name: "Sekiro shawos die twice",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1726158438",
                description:
                "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
            },
            {
                id: Math.random(),
                name: "raymen legends",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242550/header.jpg?t=1718112375",
                description:
                "Michel Ancel, the celebrated creator of Rayman®, Beyond Good & Evil®, and the Raving Rabbids®, returns to unleash his innovative creativity on this new entry into the Rayman® franchise.When Rayman, Globox, and the Teensies discover a mysterious tent filled with captivating paintings, they...",
            },
            {
                id: Math.random(),
                name: "cuphead",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852",
                description:
                "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
            },
            {
                id: Math.random(),
                name: "Lockdown Protocol",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2780980/header.jpg?t=1721725451",
                description:
                "A first person social deduction game, combining real time action and communication, 3 to 8 players. While most players will do their best to complete objectives and ensure victory, a small portion of dissidents will try to stop them at all costs, without getting caught.",
            },
            {
                id: Math.random(),
                name: "Tekken 7",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/389730/header.jpg?t=1703657219",
                description:
                "Discover the epic conclusion of the long-time clan warfare between members of the Mishima family. Powered by Unreal Engine 4, the legendary fighting game franchise fights back with stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals.",
            },
            {
                id: Math.random(),
                name: "Escape the backrooms",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1943950/header.jpg?t=1721158394",
                description:
                "Escape the Backrooms is a 1-4 player co-op horror exploration game. Traverse through eerie backrooms levels while avoiding entities and other danger to try and escape. Free content updates with new levels and game modes keep the community rewarded.",
            },

            {
                id: Math.random(),
                name: "Sons of The Forest",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg?t=1708624856",
                description:
                "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
            },
            {
                id: Math.random(),
                name: "Lethal Company",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg?t=1723894859",
                description:
                "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.",
                link:"https://mega.nz/folder/krIi1YaS#0bFmWXgiCvwZvLMXLwgT9g",
                links:"link",
            },
            {
                id: Math.random(),
                name: "A Way Out",
                posterurl:
                "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg?t=1730912036",
                description:
                "A Way Out is an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.",
            },
            ],
        },
        reducers: {
            addgame: (state, action) => {
            state.gamelist.push(action.payload);
            },
            deletegame: (state, action) => {
            state.gamelist = state.gamelist.filter(
                (el) => el.id !== action.payload.id
            );
            },
            editgame: (state, action) => {
            let i = state.gamelist.findIndex((el) => el.id === action.payload.id);
            state.gamelist[i] = action.payload.edited;
            },
        },
        });

        // Action creators are generated for each case reducer function
        export const { addgame, deletegame, editgame } = gameSlice.actions;

        export default gameSlice.reducer;
