'use strict'

function main(){

const mainElement = document.querySelector('main');

function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
}


    function buildSplashScreen () {
        const splashScreen = buildDom(`
            <section>
                <h1>Eternal Enemies</h1>
                <button class="start-button">Start</button>
            </section>
            `);
        const startButton = document.querySelector('.start-button');

        startButton.addEventListener('click', buildGameScreen);
    }
    function buildGameScreen () {
        const gameScreen = buildDom(`
        <section class='game-container'>
            <canvas></canvas>
        </section>
        `);

        const gameContainerElement = document.querySelector('.game-container')


        const width = gameContainerElement.offsetWidth;
        const height = gameContainerElement.offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        setTimeout(buildGameOverScreen,3000) ;

    }
    function buildGameOverScreen () {
        const GameOverScreen = buildDom(`
            <section>
                <h1>Game Over</h1>
                <button class="restart-button">Restart</button>

            </section>
        `)

    const restartButton = document.querySelector('.restart-button')
    restartButton.addEventListener ('click', buildGameScreen);

    }
    buildSplashScreen()


}

window.addEventListener('load',main)