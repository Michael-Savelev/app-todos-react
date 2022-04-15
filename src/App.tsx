import React, { lazy, Suspense, useState } from 'react'
import './styles/App.css'
import Sidebar from "./comps/Sidebar/Sidebar"
import Loader from "./comps/Loader"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const RightBody = lazy(() => import("./comps/RightBody/RightBody"))
const FamilyPage = lazy( () => import("./pages/familyPage") )
const SportPage = lazy( () => import("./pages/sportPage") )
const HomePage = lazy( () => import("./pages/homePage") )
const WorkPage = lazy( () => import("./pages/workPage") )
const StatisticsPage = lazy( () => import("./pages/statisticsPage") )
const ComparePage = lazy( () => import("./pages/сomparePage"))

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Suspense fallback={<Loader />}>
        <div className="left">
          <Routes>
            <Route element={<HomePage/>} path="/" />
            <Route element={<FamilyPage/>} path="/family" />
            <Route element={<WorkPage/>} path="/work" />
            <Route element={<SportPage/>} path="/sport" />
            <Route element={<StatisticsPage/>} path="/statistics" />
            <Route element={<ComparePage/>} path="/compare" />
          </Routes>
        </div>
        <div className="right">
          <RightBody/>
        </div>
      </Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App