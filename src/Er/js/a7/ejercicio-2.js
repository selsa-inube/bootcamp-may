//primer intento
function ErojasRobot({place, parcels}, route) {
    if (route.length ==0){
        let routes = parcels.map(parcel => {
            if (parcel.place != place){
                return {
                    route: findRoute(roadGraph, place, parcel.place),
                    pickup: true};
            }else{
                return {route: findRoute(roadGraph, place, parcel.address), 
                        pickup: false};
            }
        });
        function score({route, pickUp}) {
            return (pickup ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a,b) => score(a) > score(b) ? a : b).route;
    }
    return {direction: route[0], memory: route.slice(1)};
}