package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/introduction")
public class TestServlet extends HttpServlet {


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    //Array List 
    ArrayList<String> listofmessage = new ArrayList<String>();
    listofmessage.add("Hello!");
    listofmessage.add("Welcome to my Website!");
    listofmessage.add("Hope you enjoy your stay!");


    response.setContentType("text/json;");
    response.getWriter().println(listofmessage);
  }
  
}