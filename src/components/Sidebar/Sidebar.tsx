import styles from "./Sidebar.module.css";
import MenuCard from "./Menu/MenuCard";
import type { Category } from "../../types/Category";


type SidebarProps = {
    categories: Category[] | null,
    selected: number | null,
    title: "category" | "settings"
};

const settingsList: Category[] = [
    {
        id: 1,
        name: "회원",
        uri: "/settings/user"
    },
    {
        id: 2,
        name: 'OAuth',
        uri: "/setings/oauth"
    },
    {
        id: 3,
        name: "태그",
        uri: "/settings/tag"
    }
]


function Sidebar({categories=null, selected=null, title='category'}: SidebarProps) {


    return (
        <div className={styles.sidebar}>
            <MenuCard
            categories={title==='category' ? categories : settingsList}
            selected={selected}
            title={title}/>
        </div>
    )
}


export default Sidebar;