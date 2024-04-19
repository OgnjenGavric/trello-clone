import { Card, List } from '@prisma/client';

export type ListWidthCards = List & { cards: Card[] };

export type CardWidthList = Card & { list: List[] };