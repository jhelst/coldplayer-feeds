import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as coldplayers from './coldplayers'
import * as motswt from './motswt'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos = {
  [coldplayers.shortname]: {
    handler: <AlgoHandler>coldplayers.handler,
    manager: coldplayers.manager,
  },
  [motswt.shortname]: {
    handler: <AlgoHandler>motswt.handler,
    manager: motswt.manager,
  },
}

export default algos
