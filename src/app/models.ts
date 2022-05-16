export interface Game {
    id:string,
    background_image : string,
    name: string,
    released: string,
    metacritic_url: string,
    website: string,
    description:string,
    metacritic: number,
    genres: Array<Genre>,
    parent_platforms: Array<ParentPlatform>,
    publishers : Array<Publisher>,
    ratings: Array<Rating>,
    screenshots: Array<Screeshot>,
    trailors: Array<Trailor>

}
export interface APIResponse<T> {
    results : Array<T>
}
interface Genre {
    name:string
}
interface ParentPlatform{
    platform:{
        name:string,
        slug:string
    }
}
interface Publisher {
    name:string
}
interface Rating {
    id:number,
    count:number,
    title:string
}
interface Screeshot{
    image:string
}
interface Trailor {
    data: {
        max:string
    }
}