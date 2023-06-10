import styles from "./styles.module.css"

const Main = () => {

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Message Board</h1>
                <h1>Name and Surname</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <div className={styles.addButtonContainer}>
                <button className={styles.addButton}>
                    + add a message
                </button>
            </div>
        </div>

        
    )
}

export default Main

