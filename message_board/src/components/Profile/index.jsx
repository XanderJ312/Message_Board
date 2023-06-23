import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Menu from "../Menu/menu";

const Profile = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [userEmail, setEmail] = useState("");
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {value: "All Messages", href: '/', icon: "Forum"},
        {value: "My Messages", href: '/my_messages', icon: "Contact Mail"},
        {value: "Profile", href: '/profile', icon: "Person"},
    ]

    useEffect(() => {
        const userName = localStorage.getItem("name");
        const userSurname = localStorage.getItem("surname");
        const userEmail = localStorage.getItem("userEmail");
        setName(userName);
        setSurname(userSurname);
        setEmail(userEmail);

    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("userID");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <div className={styles.logo_and_menu}>
                    <span className={`material-icons ${styles.menuBtn}`} onClick={() => setMenuActive(!menuActive)}>
                        menu
                    </span>
                    <h1>Message Board</h1>
                </div>
                <button className={styles.white_btn} onClick={handleLogout}>
                Logout
                </button>
            </nav>
            <fieldset className={styles.profileInfo}>
                <legend className={styles.logolegend}><img src="user.png" width="60" alt="#" /></legend>
                <div className={styles.profileBeginPhoto}>
                    <img src="Profile.jpg" alt="#" />
                    <div class={styles.profileBeginText}>
                        {name && <h3>{name} {surname}</h3>}<br />   
                        {userEmail && <p>{userEmail}</p>}        
                    </div>
                </div>

                <div className={styles.buttons}>
                    <a href="/edit_profile" className={styles.changeButton}>Edit profile</a>
                    <a href="#zaciemnienie" className={styles.deleteButton}>Delete profile</a>
                </div>
            </fieldset>

            <div className={styles.zaciemnienie}>
                <div className={styles.okno}>

                    <img src="../../Pictures/sad_white.png" width="60" alt="#" />
                    <p>Czy napewno chcesz usunąć konto na Message Board? Usunięcie konta spowoduje straty wszystkich danych,
                        związanych z tym kontem bez możliwości odzyskania tych danych.</p> <br />

                    <a href="PHP/DeleteAccount.php" class="deleteButton">Tak, usunąć konto</a>
                    <a href="#" class="close">Nie, wracam się</a>
                </div>
            </div>
            
            
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </div>
    );
};

export default Profile;

