using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        string[] location = new string[10];
        string[] state = new string[10];
        string[] stock = new string[10];
        string[] data = new string[3];
        string[][] allData = new string[10][];
        //string[] locations = new string[10]; //{
        //    "New York",
        //    "Washington",
        //    "Moskve",
        //    "St.Petersburg",
        //    "London",
        //    "Warzsawa",
        //    "Kyiv",
        //    "Stockholm",
        //    "Oslo",
        //    "Copenhagen"
        //};
        public Form1()
        {
            InitializeComponent();
            if (File.Exists("data.csv"))
            {
                using (StreamReader reader = new StreamReader(Directory.GetCurrentDirectory()+@"\data.csv"))
                {
                    for (int i = 0; !reader.EndOfStream; i++)
                    {
                        allData[i] = reader.ReadLine().Split(',');
                    }
                }
            }
            else {
                allData = new string[0][];
            }
        }

        bool user_active = false;
        bool pass_active = false;
        private void textBox1_Enter(object sender, EventArgs e)
        {
            if (textBox1.Text == "Username"&&!user_active)
            {
                textBox1.ForeColor = Color.Black;
                textBox1.Text = "";
                user_active = true;
            }
        }

        private void textBox1_Leave(object sender, EventArgs e)
        {
            if (textBox1.Text == "" && user_active) {
                textBox1.ForeColor = Color.Silver;
                textBox1.Text = "Username";
                user_active = false;
            }
        }

        private void textBox2_Enter(object sender, EventArgs e)
        {
            if (textBox2.Text == "Password" && !pass_active)
            {
                textBox2.ForeColor = Color.Black;
                textBox2.Text = "";
                pass_active = true;
            }
        }

        private void textBox2_Leave(object sender, EventArgs e)
        {
            if (textBox2.Text == "" && pass_active)
            {
                textBox2.ForeColor = Color.Silver;
                textBox2.Text = "Password";
                pass_active = false;
            }
        }
        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)Keys.Enter)
            {
                textBox2.Focus();
                e.Handled = true;
            }
        }

        private void textBox2_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)Keys.Enter) {
                e.Handled = true;
                if (textBox1.Text == "admin" && textBox2.Text == "root")
                {
                    label1.Text = "Successful";
                    foreach (string[] data in allData) {
                        comboBox1.Items.Add(data[0]);
                    }
                }
                else {
                    label1.Text = "Wrong username or password";
                }
            }
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            label2.Text = allData[comboBox1.SelectedIndex][1];
            label3.Text = allData[comboBox1.SelectedIndex][2];
        }
    }
}