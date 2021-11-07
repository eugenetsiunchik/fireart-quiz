import React, { useEffect, useReducer } from 'react';
import './App.css';
import { RootState } from "../config/store";
import { useSelector } from "react-redux";
import { getComponentByRouteName } from "../common/routingHelper";

function App() {
    const page = useSelector((state: RootState) => state.routing.page);
    const Route = getComponentByRouteName(page);

    return (
        <div className="fir-app">
          <Route/>
        </div>
      );
}

export default App;
