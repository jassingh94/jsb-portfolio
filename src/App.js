
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import React from 'react'
import Menu from './lib/Menu';
import Content from "./lib/Content";
import $ from 'jquery';
import { Scrollbars } from 'react-custom-scrollbars';

(function ($) {
    $.fn.randomizeText = function (options) {

        let singleRandomText = function (v, settings) {

            let parseTextToArray = function (text, cleanSpaces) {
                if (cleanSpaces) {
                    text = text.replace(' ', '');
                }
                return text.split('');
            }

            let renderText = function (renderArray, el, targetText, refreshRate) {
                var a = [];
                $.each(renderArray, function (k, v) {
                    a.push(v.getLetter());
                });
                var t = a.join('');
                $(el[0]).html(t);

                if (targetText != t) {
                    setTimeout(function () {
                        renderText(renderArray, el, targetText, refreshRate);
                    }, refreshRate);
                }
            }

            let addLetterToText = function (textArray, renderArray, settings) {
                var l = textArray.slice(renderArray.length, renderArray.length + 1);
                var lo = new randomLetter(l[0], settings);
                renderArray.push(lo);

                if (renderArray.length < textArray.length) {
                    setTimeout(function () {
                        addLetterToText(textArray, renderArray, settings)
                    }, settings.timePerLetter);
                }
            }

            let randomLetter = function (l, settings) {
                this.letter = l;
                this.settings = settings;
                this.currentLetter = "";
                this.currentRandomTry = 1;
                var letter = this;
                this.getLetter = function () {
                    return this.currentLetter;
                };
                setTimeout(function () {
                    generateRandomLetter(letter);
                }, settings.randomTime);

            }

            let generateRandomLetter = function (letter) {
                var i = parseInt(Math.random() * letter.settings.randomLetters.length);
                letter.currentLetter = letter.settings.randomLetters[i];
                if (letter.maxRandomTries != 0) {

                    letter.currentRandomTry++;

                    if (letter.currentRandomTry == letter.maxRandomTries) {
                        letter.currentLetter = letter.letter;
                    }
                }

                if (letter.letter != letter.currentLetter) {
                    setTimeout(function () {
                        generateRandomLetter(letter);
                    }, settings.randomTime);
                }
            }

            let init = function (v, settings) {
                var renderArray = [],
                    textArray = [],
                    el = $(v),
                    text = '';

                // get text
                if (settings.text.length == 0) {
                    if (el.html().length == 0) {
                        text = "you need to add a text by adding {text:'my text'} as argument.";
                    } else {
                        text = el.html();
                        el.html('');
                    }
                } else {
                    text = settings.text;
                }

                textArray = parseTextToArray(text, false);
                let maxRandomValue = textArray.length;

                // create randomLetters
                if (settings.randomLetters.length == 0) {
                    settings.randomLetters = parseTextToArray(text, false);
                } else {
                    settings.randomLetters = parseTextToArray(settings.randomLetters, false);
                }

                // start gameloop
                setTimeout(function () {
                    renderText(renderArray, el, text, settings.refreshRate);
                }, settings.refreshRate);

                setTimeout(function () {
                    addLetterToText(textArray, renderArray, settings);
                }, settings.timePerLetter);
            }

            init(v, settings);
        };

        // return false if no dom is present
        if (this.length == 0) {
            console.log('Randomize Text: No document object found.');
            return
        }

        // options and defaults
        var settings = $.extend(
            $.fn.randomizeText.defaults,
            options
        );

        // iterate through elements
        $.each(this, function (k, v) {
            var s = $.extend(true, {}, settings);
            new singleRandomText(v, s);
        });
    }

    // Plugin defaults ??? added as a property on our plugin function.
    $.fn.randomizeText.defaults = {
        text: '',
        refreshRate: 50,
        timePerLetter: 50,
        randomTime: 50,
        maxRandomTries: 10,
        randomLetters: ''
    };

}($));

class App extends React.Component {
    componentDidMount(){
        //opens profile by default
        window.document.getElementsByClassName(`Profile`)[0].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        // const y = document.getElementsByClassName(`Profile`)[0].getBoundingClientRect().top + window.pageYOffset - 200;
        // window.scrollTo({top: y, behavior: 'smooth'});
    }
    render() {
        return (
            <Scrollbars>
                <div className="App">
                    <header className="App-menu">
                        <div className="ui notActive loader mainLoader inverted"></div>
                        <div className="emptyDiv"></div>
                        <Menu />

                    </header>
                    <div className="emptyDiv"></div>
                    <main className="App-header">
                        <Content />
                    </main>
                </div>
            </Scrollbars>
        );
    }
}

export default App;
