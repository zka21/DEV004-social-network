export const posts = (onNavigate) => {
    const root = document.getElementById('root');
    root.innerHTML = `
    <section id= "containerMain">
        <div id="partOfwelcome">
            <img src="./Imagenes/cactusFile.png"><br>
            <button id="logOut">Login Out</button>
            <h2>Bienvenido a Cáo</h2>
            <p>Cuentanos algo de las plantas</p>
        </div>

        <div id = "newPost">
            <textarea id="description" rows="6" cols="50" placeholder="cuentanos algo de las plantas"> </textarea> <br>
            <button>Publicar</button>
        </div>

        <line>____________________________________</line> <br><br>

        <div id="historyOfPosts">

            <div id="informationOfUser">
                <img src="./Imagenes/usersinfondo.png">
                <h3>Name User</h3>
            </div>
            
            <div id="buttonsOfConfiguration">
                <button class="buttonsOfConfiguration">Edit</button>
                <button class="buttonsOfConfiguration">Delete</button>
            </div>

        </div>
        <button>Me gusta</button>
    </section>

    <footer></footer>
    `
    const logOut = document.getElementById('logOut');
    logOut.addEventListener('click', () => onNavigate('/'));
}
