import React from 'react';
import AppContainer from './AppContainer';

const Edit = () => {
    return (
        <AppContainer
          title="EDIT POST">
              <form>
                  <div className="form-group">
                      <label>TITLE</label>
                      <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" type="text"></textarea>
                  </div>
                  <div className="form-group">
                     <button type="button" className="btn btn-success" >ADD</button>
                  </div>
              </form>

        </AppContainer>
    );
};
 export default Edit;
