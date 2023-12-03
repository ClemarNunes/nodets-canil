import {Request, Response} from 'express';


export const home = (req: Request, res: Response) => {
    res.send('home no controller')
    // res.render('page/page')
}
export const dogs = (req: Request, res: Response) => {
    // res.render('page/page')
}
export const cats = (req: Request, res: Response) => {
    // res.render('page/page')
}
export const fishes = (req: Request, res: Response) => {
    // res.render('page/page')
}