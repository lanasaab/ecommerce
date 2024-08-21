import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {jwtDecode}  from 'jwt-decode';

interface DecodedToken {
  exp: number;
}

const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode<DecodedToken>(token);
    if (Date.now() >= exp * 1000) return false;
    return true;
  } catch (e) {
    return false;
  }
};

const Authenticated = () => {
  const token = localStorage.getItem('token');
  const validToken = isTokenValid(token);

  return validToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default Authenticated
