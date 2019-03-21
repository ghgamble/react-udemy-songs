import React from 'react';

import {selectSong} from '../actions';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
      return (
            <div>
                  <SongList />
                  <SongDetail />
            </div>
      );
}

export default App;
