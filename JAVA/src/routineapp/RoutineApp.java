/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package routineapp;
import javax.swing.JEditorPane;
import javax.swing.JFrame;
import javax.swing.JScrollPane;

/**
 *
 * @author smnsh
 */
public class RoutineApp {


    public static void main(String[] args) throws Exception {
       JEditorPane website = new JEditorPane("https://smnshuvo.000webhostapp.com/routine.php");
        website.setEditable(false);
        JFrame frame = new JFrame("rotuine app");
        frame.add(new JScrollPane(website));
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(1200, 800);
        frame.setVisible(true);
    }
    
}
