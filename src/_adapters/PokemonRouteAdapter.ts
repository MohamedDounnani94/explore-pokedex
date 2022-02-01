import {
  Router, Request, Response, NextFunction,
} from 'express';

import PokemonService from '../_ports/PokemonService';

const router = Router();

router.get('/pokemon/:name', async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  try {
    const pokemon = await PokemonService.getPokemonByName(name);
    res.status(200).send({ pokemon });
  } catch (e) {
    next(e);
  }
});

router.get('/pokemon/translated/:name', async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  try {
    const pokemon = await PokemonService.getTranslatedPokemonByName(name);
    res.status(200).send({ pokemon });
  } catch (e) {
    next(e);
  }
});

export default router;
