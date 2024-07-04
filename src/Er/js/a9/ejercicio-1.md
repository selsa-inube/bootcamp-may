A modular robot

roads
buildGraph
roadGraph
VillageState
runRobot
randomPick
randomRobot
mailRoute
routeRobot
findRoute
goalOrientedRobot



Si tuvieras que escribir ese proyecto como un programa modular, ¿qué módulos crearías? ¿Qué módulo dependería de qué otro módulo y cómo serían sus interfaces?

Se podría dividir en varios modulos, uno podría ser por funcionalidad:

Graph => podría contener a buildGraph y roadGraph
Roads => podría contener a roads, VillageState
Route => podría contener a randomPick, mailRoute, findRoute
Robots=> podría contener a runRobot, randomRobot, routeRobot, goalOrientedRobot

Roads dependería de Graph
Route dependería de Roads y Graph
Robots dependería de Route y Roads

¿Qué piezas es probable que estén disponibles preescritas en NPM? ¿Preferirías usar un paquete de NPM o escribirlas tú mismo?

De acuerdo con las lecturas en NPM puede existir el paquete random-item así como la dependencia de dijkstrajs.

Si el proyecto es pequeño sería más práctico utilizar los paquetes de NPM, pero dependeríamos de tercero por cualquier fallo y tenemos algún riesgo de seguridad. 

Optaría por hacer el desarrollo de manera propia para tener el control del código y poder darle optimización más adelante.