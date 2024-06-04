import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectiveRoutes({ children }) {
  const navigate = useNavigate();
  const { currentRefId } = useAuth();
  if (!currentRefId) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
