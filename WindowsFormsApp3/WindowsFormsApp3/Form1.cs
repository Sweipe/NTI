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
        string[] data = new string[3];
        string[][] allData = new string[10][];
        public Form1()
        {
            InitializeComponent();
        }

        //Start settings, load and storing hidden information
        private void Form1_Load(object sender, EventArgs e)
        {
            panelLogin.Visible = true;
            panelResult.Visible = false;
            label_error.Text = string.Empty;
            string dataFilename = "data.csv";
            if (File.Exists(dataFilename))
            {
                //Loads file if found, no backup though
                using(StreamReader reader = new StreamReader(dataFilename))
                {
                    for (int i = 0; !reader.EndOfStream; i++)
                    {
                        allData[i] = reader.ReadLine().Split(',');
                    }
                }

                //Opens or creates log file and notes down access date
                using (FileStream fs = new FileStream("log.txt", FileMode.Append, FileAccess.Write)) {
                    string logdata = string.Format("Data accessed at {0}\n", DateTime.Now);
                    fs.Write(new UTF8Encoding().GetBytes(logdata),0,logdata.Length);
                }
            }
            else
            {
                allData = new string[0][];
            }
            foreach (string[] data in allData)
            {
                comboBox1.Items.Add(data[0]);
            }
        }

        //Display additional information linked to selected option
        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string location = allData[comboBox1.SelectedIndex][0];
            string status = allData[comboBox1.SelectedIndex][1];
            string stock = allData[comboBox1.SelectedIndex][2];
            label4.Text = "Location: " + location;
            label2.Text = "Status: " + status;
            label3.Text = "Stock: " + stock;
        }

        //Check credentials and display accessed panel
        private void btn_login_Click(object sender, EventArgs e)
        {
            if (!Validate(usernameBox.Text))
            {
                label_error.Text = "Username must contain only letters and numbers";
                return;
            }
            if (!Validate(passwordBox.Text))
            {
                label_error.Text = "Password must contain only letters and numbers";
                return;
            }
            if (usernameBox.Text == "admin" && passwordBox.Text == "root")
            {
                label_error.Text = "Successful";
                panelLogin.Visible = false;
                panelResult.Visible = true;
            }
            else
            {
                label_error.Text = "Wrong username or password";
            }
        }

        //Return false if text contains letters not whitelisted in args- section
        public bool Validate(string text)
        {
            bool argUppercase, argLowercase, argNumerals;
            foreach (int key in text)
            {
                argUppercase = (65 <= key && key <= 90);
                argLowercase = (97 <= key && key <= 122);
                argNumerals = (48 <= key && key <= 57);
                if (!argUppercase && !argLowercase && !argNumerals)
                {
                    return false;
                }
            }
            return true;
        }


        //TextChanged reset error_label
        private void usernameBox_TextChanged(object sender, EventArgs e)
        {
            label_error.Text = "";
        }

        private void passwordBox_TextChanged(object sender, EventArgs e)
        {
            label_error.Text = "";
        }
    }
}