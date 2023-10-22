import { Inconsolata, Ubuntu, Kanit,Rajdhani } from "next/font/google";

const inconsolata = Inconsolata({
    subsets: ['latin'],
    weight: '600'
});
const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: '400'
});
const kanit = Kanit({
    subsets: ['latin'],
    weight: '600'
});
const rajdhani=Rajdhani({
    weight:'400',
    subsets:['latin']
});

let fonts={
    inconsolata,
    ubuntu,
    kanit,
    rajdhani
}
export default fonts