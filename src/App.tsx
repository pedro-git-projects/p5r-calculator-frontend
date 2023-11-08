import PersonaTable from "./components/PersonaTable";

const persona = {
        "name": "Abaddon",
        "inherits": "curse",
        "item": "Megaton Raid Belt",
        "itemr": "God's Hand Belt",
        "lvl": 75,
        "resists": {
            "phys": "d",
            "gun": "d",
            "fire": "-",
            "ice": "-",
            "elec": "-",
            "wind": "-",
            "pys": "-",
            "nuke": "-",
            "bless": "s",
            "curse": "d"
        },
        "skills": {
            "Mabufudyne": 0.1,
            "Megaton Raid": 0.2,
            "Enduring Soul": 0.3,
            "Flash Bomb": 78,
            "Ailment Boost": 79,
            "Absorb Phys": 80,
            "Gigantomachia": 81
        },
        "stats": {
            "st": 51,
            "ma": 42,
            "en": 58,
            "ag": 38,
            "lu": 43
        },
        "trait": "Mouth of Savoring",
        "arcana": "Judgement"
    }

export default function App() {
    return (
    <>
        <PersonaTable persona={persona}/>
        </>
    )
}

