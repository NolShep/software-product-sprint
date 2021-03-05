package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/introduction")
public class TestServlet extends HttpServlet {

  @Override
  public void doGet(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Hello! My name is Nolan</h1>");
  }
}