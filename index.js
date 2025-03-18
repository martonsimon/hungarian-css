const hungarianCss = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-hungarian-css',
        Once(root) {
            const hungarianToEnglish = {
                // Layout & Box Model
                'magasság': 'height',
                'szélesség': 'width',
                'max-magasság': 'max-height',
                'max-szélesség': 'max-width',
                'min-magasság': 'min-height',
                'min-szélesség': 'min-width',
                'belső-margó': 'padding',
                'belső-margó-felső': 'padding-top',
                'belső-margó-jobb': 'padding-right',
                'belső-margó-alul': 'padding-bottom',
                'belső-margó-bal': 'padding-left',
                'szegély': 'border',
                'szegély-szín': 'border-color',
                'szegély-stílus': 'border-style',
                'szegély-vastagság': 'border-width',
                'szegély-felső': 'border-top',
                'szegély-jobb': 'border-right',
                'szegély-alul': 'border-bottom',
                'szegély-bal': 'border-left',
                'szegély-sugár': 'border-radius',
                'szegély-sugár-felső-bal': 'border-top-left-radius',
                'szegély-sugár-felső-jobb': 'border-top-right-radius',
                'szegély-sugár-alul-bal': 'border-bottom-left-radius',
                'szegély-sugár-alul-jobb': 'border-bottom-right-radius',
                'külső-margó': 'margin',
                'külső-margó-felső': 'margin-top',
                'külső-margó-jobb': 'margin-right',
                'külső-margó-alul': 'margin-bottom',
                'külső-margó-bal': 'margin-left',
                'kijelzés': 'display',
                'pozíció': 'position',
                'felső': 'top',
                'jobb': 'right',
                'alsó': 'bottom',
                'bal': 'left',
                'z-pozíció': 'z-index',
                'lebegés': 'float',
                'tisztítás': 'clear',
                'túlcsordulás': 'overflow',
                'túlcsordulás-vízszintes': 'overflow-x',
                'túlcsordulás-függőleges': 'overflow-y',
                'láthatóság': 'visibility',
                'alfacsatorna': 'opacity',
                
                // Typography
                'betű-család': 'font-family',
                'betű-méret': 'font-size',
                'betű-súly': 'font-weight',
                'betű-stílus': 'font-style',
                'betű-variáns': 'font-variant',
                'sor-magasság': 'line-height',
                'betű-köz': 'letter-spacing',
                'szöveg-igazítás': 'text-align',
                'szöveg-dekoráció': 'text-decoration',
                'szöveg-transzformáció': 'text-transform',
                'szöveg-behúzás': 'text-indent',
                'szöveg-köz': 'word-spacing',
                'fehér-terület': 'white-space',
                'szöveg-irány': 'direction',
                'unicode-bidi': 'unicode-bidi',
                'vertikális-igazítás': 'vertical-align',
                
                // Colors & Background
                'szín': 'color',
                'háttér': 'background',
                'háttér-szín': 'background-color',
                'háttér-kép': 'background-image',
                'háttér-ismétlés': 'background-repeat',
                'háttér-pozíció': 'background-position',
                'háttér-rögzítés': 'background-attachment',
                'háttér-méret': 'background-size',
                'háttér-origin': 'background-origin',
                'háttér-clip': 'background-clip',
                
                // Lists
                'lista-típus': 'list-style',
                'lista-típus-kép': 'list-style-image',
                'lista-típus-pozíció': 'list-style-position',
                'lista-típus-típus': 'list-style-type',
                
                // Tables
                'tábla-láthatóság': 'table-layout',
                'tábla-összevonás': 'border-collapse',
                'tábla-köz': 'border-spacing',
                'üres-cellák': 'empty-cells',
                'cím-oldal': 'caption-side',
                
                // Content & Generated Content
                'tartalom': 'content',
                'számláló-növekmény': 'counter-increment',
                'számláló-alap': 'counter-reset',
                'kutatás': 'quotes',
                
                // User Interface
                'kurzor-mutató': 'cursor',
                'kurzor-mutató-kijelzés': 'outline',
                'kurzor-mutató-kijelzés-szín': 'outline-color',
                'kurzor-mutató-kijelzés-stílus': 'outline-style',
                'kurzor-mutató-kijelzés-vastagság': 'outline-width',
                'kurzor-mutató-kijelzés-offset': 'outline-offset',
                
                // Transitions & Animations
                'átmenet': 'transition',
                'átmenet-tulajdonság': 'transition-property',
                'átmenet-idő': 'transition-duration',
                'átmenet-időzítés': 'transition-timing-function',
                'átmenet-késleltetés': 'transition-delay',
                'animáció': 'animation',
                'animáció-név': 'animation-name',
                'animáció-idő': 'animation-duration',
                'animáció-időzítés': 'animation-timing-function',
                'animáció-késleltetés': 'animation-delay',
                'animáció-ismétlés': 'animation-iteration-count',
                'animáció-irány': 'animation-direction',
                'animáció-allapot': 'animation-fill-mode',
                'animáció-játszás': 'animation-play-state',
                
                // Transform
                'transzformáció': 'transform',
                'transzformáció-origin': 'transform-origin',
                'transzformáció-stílus': 'transform-style',
                'perspektíva': 'perspective',
                'perspektíva-origin': 'perspective-origin',
                'vissza-láthatóság': 'backface-visibility',
                
                // Box Sizing & Layout
                'doboz-méret': 'box-sizing',
                'újraméretezés': 'resize',
                'doboz-árnyék': 'box-shadow',
                
                // Flexbox
                'hajlékony-irány': 'flex-direction',
                'hajlékony-csomagolás': 'flex-wrap',
                'hajlékony-folyam': 'flex-flow',
                'hajlékony-növekmény': 'flex-grow',
                'hajlékony-zsugorodás': 'flex-shrink',
                'hajlékony-alap': 'flex-basis',
                'hajlékony': 'flex',
                'hajlékony-rend': 'order',
                'hajlékony-igazítás': 'justify-content',
                'hajlékony-elemek-igazítása': 'align-items',
                'hajlékony-sorok-igazítása': 'align-content',
                
                // Grid
                'rács-sablon-oszlopok': 'grid-template-columns',
                'rács-sablon-sorok': 'grid-template-rows',
                'rács-sablon-területek': 'grid-template-areas',
                'rács-sablon': 'grid-template',
                'tér': 'gap',
                'rács-auto-oszlopok': 'grid-auto-columns',
                'rács-auto-sorok': 'grid-auto-rows',
                'rács-auto-folyam': 'grid-auto-flow',
                'rács-oszlop-start': 'grid-column-start',
                'rács-oszlop-end': 'grid-column-end',
                'rács-oszlop': 'grid-column',
                'rács-sor-start': 'grid-row-start',
                'rács-sor-end': 'grid-row-end',
                'rács-sor': 'grid-row',
                'rács-terület': 'grid-area',
                'rács-gap': 'grid-gap',
                'rács-oszlop-gap': 'grid-column-gap',
                'rács-sor-gap': 'grid-row-gap',
                
                // Print
                'oldal-törlés': 'page-break-after',
                'oldal-törlés-előtt': 'page-break-before',
                'oldal-törlés-belül': 'page-break-inside',
                'oldal-orientáció': 'page-orientation',
                
                // Media Queries
                'media-típus': 'media-type',
                'media-jellemzők': 'media-features',
                
                // Pseudo-elements & Pseudo-classes
                'első-betű': 'first-letter',
                'első-sor': 'first-line',
                'előtt': 'before',
                'után': 'after',
                'kijelölt': 'selection',
                'marker': 'marker',
                
                // Other
                'állapot': 'state',
                'hang': 'speech',
                'hang-hangerősség': 'volume',
                'hang-speaker': 'speak',
                'hang-pauza': 'pause',
                'hang-pauza-előtt': 'pause-before',
                'hang-pauza-utan': 'pause-after',
                'hang-cue': 'cue',
                'hang-cue-előtt': 'cue-before',
                'hang-cue-utan': 'cue-after',
                'hang-nyelv': 'voice-family',
                'hang-tulajdonságok': 'voice-properties',
                'hang-tempo': 'speech-rate',
                'hang-pitch': 'pitch',
                'hang-pitch-range': 'pitch-range',
                'hang-stress': 'stress',
                'hang-ritmus': 'richness',
                'hang-szöveg': 'speak-numeral',
                'hang-pontozás': 'speak-punctuation',
                'hang-szöveg-összefűzés': 'speak-header'
            };

            const hungarianUnits = {
                'px': 'px',
                'képpont': 'px',
                'százalék': '%',
                'százalékos': '%',
                'vh': 'vh',
                'nézet-magasság': 'vh',
                'vw': 'vw',
                'nézet-szélesség': 'vw',
                'vmin': 'vmin',
                'nézet-minimum': 'vmin',
                'vmax': 'vmax',
                'nézet-maximum': 'vmax',
                'em': 'em',
                'rem': 'rem',
                'pt': 'pt',
                'pont': 'pt',
                'pc': 'pc',
                'pica': 'pc',
                'in': 'in',
                'hüvelyk': 'in',
                'cm': 'cm',
                'centiméter': 'cm',
                'mm': 'mm',
                'milliméter': 'mm',
                'q': 'q',
                'negyedmilliméter': 'q',
                'deg': 'deg',
                'fok': 'deg',
                'rad': 'rad',
                'radián': 'rad',
                'grad': 'grad',
                'gradián': 'grad',
                'turn': 'turn',
                'fordulat': 'turn',
                's': 's',
                'mp': 's',
                'másodperc': 's',
                'ms': 'ms',
                'mmp': 'ms',
                'millimásodperc': 'ms',
                'Hz': 'Hz',
                'frekvencia': 'Hz',
                'kHz': 'kHz',
                'kfrekvencia': 'kHz',
                'dpi': 'dpi',
                'dpcm': 'dpcm',
                'dppx': 'dppx',
                'fr': 'fr',
                'tört': 'fr',
                'ch': 'ch',
                'karakter': 'ch',
                'ex': 'ex',
                'x-magasság': 'ex'
            };

            const hungarianValues = {
                // Display & Position
                'középre': 'center',
                'balra': 'left',
                'jobbra': 'right',
                'felülre': 'top',
                'alulra': 'bottom',
                'középre-igazítva': 'center',
                'balra-igazítva': 'left',
                'jobbra-igazítva': 'right',
                'szélesítve': 'justify',
                'középre-zárva': 'center',
                'felülre-zárva': 'flex-start',
                'alulra-zárva': 'flex-end',
                'szélesítve-zárva': 'space-between',
                'egyenlően-osztva': 'space-around',
                'egyenlően-szétosztva': 'space-evenly',
                
                // Flex & Grid
                'csomagolás': 'wrap',
                'nincs-csomagolás': 'nowrap',
                'fordított-csomagolás': 'wrap-reverse',
                'oszlop': 'column',
                'sor': 'row',
                'fordított-oszlop': 'column-reverse',
                'fordított-sor': 'row-reverse',
                'növekszik': 'grow',
                'zsugorodik': 'shrink',
                'nem-növekszik': '0',
                'nem-zsugorodik': '0',
                'auto': 'auto',
                
                // Border & Outline
                'szilárd': 'solid',
                'pontozott': 'dotted',
                'szaggatott': 'dashed',
                'dupla': 'double',
                'behúzott': 'inset',
                'kiálló': 'outset',
                'rejtett': 'hidden',
                'nincs': 'none',
                
                // Visibility & Display
                'látható': 'visible',
                'rejtett': 'hidden',
                'eltávolítva': 'none',
                'blokk': 'block',
                'sor': 'inline',
                'sor-blokk': 'inline-block',
                'tábla': 'table',
                'tábla-sor': 'table-row',
                'tábla-cella': 'table-cell',
                
                // Overflow
                'látható-túlcsordulás': 'visible',
                'rejtett-túlcsordulás': 'hidden',
                'görgetés': 'scroll',
                'automatikus': 'auto',
                
                // Position
                'statikus': 'static',
                'relatív': 'relative',
                'abszolút': 'absolute',
                'rögzített': 'fixed',
                'ragadós': 'sticky',
                
                // Float & Clear
                'úszik-balra': 'left',
                'úszik-jobbra': 'right',
                'úszik-nincs': 'none',
                'tisztít-balra': 'left',
                'tisztít-jobbra': 'right',
                'tisztít-mindkét': 'both',
                
                // Text
                'nagybetűs': 'uppercase',
                'kisbetűs': 'lowercase',
                'camel-case': 'capitalize',
                'felül-áthúzott': 'overline',
                'alul-áthúzott': 'underline',
                'áthúzott': 'line-through',
                'felül-alul-áthúzott': 'underline overline',
                
                // Font
                'normál': 'normal',
                'vastag': 'bold',
                'köztes': 'medium',
                'vékony': 'light',
                'dőlt': 'italic',
                'ferde': 'oblique',
                
                // List
                'kör': 'circle',
                'lemez': 'disc',
                'négyzet': 'square',
                'római': 'upper-roman',
                'arab': 'decimal',
                'betű': 'lower-alpha',
                'nagybetű': 'upper-alpha',
                
                // Table
                'összevonás': 'collapse',
                'elkülönítés': 'separate',
                'üres': 'empty',
                'rejtett-üres': 'hide',
                'mutatás': 'show',
                
                // Animation
                'végtelen': 'infinite',
                'alternáló': 'alternate',
                'fordított-alternáló': 'alternate-reverse',
                'előre': 'forward',
                'vissza': 'backward',
                'mindkét-irány': 'both',
                'kitöltés-előtte': 'backwards',
                'kitöltés-utána': 'forwards',
                'kitöltés-mindkét': 'both',
                'futás': 'running',
                'szüneteltetve': 'paused',
                
                // Transform
                '3d': 'preserve-3d',
                'lapos': 'flat',
                'látható-vissza': 'visible',
                'rejtett-vissza': 'hidden',
                
                // Box Sizing
                'tartalom-doboz': 'content-box',
                'szegély-doboz': 'border-box',
                
                // Resize
                'vízszintes': 'horizontal',
                'függőleges': 'vertical',
                'mindkét-irány': 'both',
                
                // Cursor
                'mutató': 'pointer',
                'várakozás': 'wait',
                'szöveg': 'text',
                'mozgatás': 'move',
                'nem-engedélyezett': 'not-allowed',
                'kérdőjel': 'help',
                'kereszt': 'crosshair',
                'nagyítás': 'zoom-in',
                'kicsinyítés': 'zoom-out',

                'rács': 'grid',
                'háttér-szín-átmenet': 'background-color',
                
                // User Select
                'kijelölhető': 'text',
                'nem-kijelölhető': 'none',
                'minden-kijelölhető': 'all',
                'kijelölés-ellenőrzés': 'contain'
            };

            root.walkDecls(decl => {
                // Handle property names
                if (hungarianToEnglish[decl.prop]) {
                    decl.prop = hungarianToEnglish[decl.prop];
                }

                // Handle values with Hungarian units
                let value = decl.value;
                for (const [hungarianUnit, englishUnit] of Object.entries(hungarianUnits)) {
                    const regex = new RegExp(`(\\d+(?:\\.\\d+)?)${hungarianUnit}`, 'g');
                    value = value.replace(regex, `$1${englishUnit}`);
                }

                // Handle Hungarian values
                for (const [hungarianValue, englishValue] of Object.entries(hungarianValues)) {
                    const regex = new RegExp(`\\b${hungarianValue}\\b`, 'g');
                    value = value.replace(regex, englishValue);
                }

                decl.value = value;
            });
        }
    };
};

hungarianCss.postcss = true;
export default hungarianCss;
export { hungarianCss };