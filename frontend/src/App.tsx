import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Materials from './pages/Materials'
import MaterialDetail from './pages/MaterialDetail'
import ChromatographicAnalyses from './pages/ChromatographicAnalyses'
import Composites from './pages/Composites'
import CompositeDetail from './pages/CompositeDetail'
import Workflows from './pages/Workflows'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="materials" element={<Materials />} />
          <Route path="materials/:id" element={<MaterialDetail />} />
          <Route path="analyses" element={<ChromatographicAnalyses />} />
          <Route path="composites" element={<Composites />} />
          <Route path="composites/:id" element={<CompositeDetail />} />
          <Route path="workflows" element={<Workflows />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App








