
namespace WindowsFormsApp3
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.usernameBox = new System.Windows.Forms.TextBox();
            this.passwordBox = new System.Windows.Forms.TextBox();
            this.label_error = new System.Windows.Forms.Label();
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.panelLogin = new System.Windows.Forms.Panel();
            this.label_password = new System.Windows.Forms.Label();
            this.label_username = new System.Windows.Forms.Label();
            this.btn_login = new System.Windows.Forms.Button();
            this.panelResult = new System.Windows.Forms.Panel();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.panelLogin.SuspendLayout();
            this.panelResult.SuspendLayout();
            this.SuspendLayout();
            // 
            // usernameBox
            // 
            this.usernameBox.ForeColor = System.Drawing.Color.Gray;
            this.usernameBox.Location = new System.Drawing.Point(192, 61);
            this.usernameBox.Name = "usernameBox";
            this.usernameBox.Size = new System.Drawing.Size(176, 26);
            this.usernameBox.TabIndex = 0;
            this.usernameBox.TextChanged += new System.EventHandler(this.usernameBox_TextChanged);
            // 
            // passwordBox
            // 
            this.passwordBox.ForeColor = System.Drawing.Color.Gray;
            this.passwordBox.Location = new System.Drawing.Point(192, 102);
            this.passwordBox.Name = "passwordBox";
            this.passwordBox.Size = new System.Drawing.Size(176, 26);
            this.passwordBox.TabIndex = 1;
            this.passwordBox.TextChanged += new System.EventHandler(this.passwordBox_TextChanged);
            // 
            // label_error
            // 
            this.label_error.AutoSize = true;
            this.label_error.BackColor = System.Drawing.Color.Transparent;
            this.label_error.ForeColor = System.Drawing.Color.Red;
            this.label_error.Location = new System.Drawing.Point(388, 64);
            this.label_error.Name = "label_error";
            this.label_error.Size = new System.Drawing.Size(254, 20);
            this.label_error.TabIndex = 2;
            this.label_error.Text = "You\'ve inputed error abababababa";
            // 
            // comboBox1
            // 
            this.comboBox1.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Location = new System.Drawing.Point(19, 77);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(121, 28);
            this.comboBox1.TabIndex = 3;
            this.comboBox1.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(146, 80);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(60, 20);
            this.label2.TabIndex = 4;
            this.label2.Text = "Status:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(146, 115);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(54, 20);
            this.label3.TabIndex = 5;
            this.label3.Text = "Stock:";
            // 
            // panelLogin
            // 
            this.panelLogin.Controls.Add(this.label_password);
            this.panelLogin.Controls.Add(this.label_username);
            this.panelLogin.Controls.Add(this.label_error);
            this.panelLogin.Controls.Add(this.btn_login);
            this.panelLogin.Controls.Add(this.usernameBox);
            this.panelLogin.Controls.Add(this.passwordBox);
            this.panelLogin.Location = new System.Drawing.Point(159, 91);
            this.panelLogin.Name = "panelLogin";
            this.panelLogin.Size = new System.Drawing.Size(697, 192);
            this.panelLogin.TabIndex = 7;
            // 
            // label_password
            // 
            this.label_password.AutoSize = true;
            this.label_password.Location = new System.Drawing.Point(104, 102);
            this.label_password.Name = "label_password";
            this.label_password.Size = new System.Drawing.Size(82, 20);
            this.label_password.TabIndex = 8;
            this.label_password.Text = "Password:";
            // 
            // label_username
            // 
            this.label_username.AutoSize = true;
            this.label_username.Location = new System.Drawing.Point(99, 64);
            this.label_username.Name = "label_username";
            this.label_username.Size = new System.Drawing.Size(87, 20);
            this.label_username.TabIndex = 7;
            this.label_username.Text = "Username:";
            // 
            // btn_login
            // 
            this.btn_login.Location = new System.Drawing.Point(192, 143);
            this.btn_login.Name = "btn_login";
            this.btn_login.Size = new System.Drawing.Size(85, 31);
            this.btn_login.TabIndex = 2;
            this.btn_login.Text = "Login";
            this.btn_login.UseVisualStyleBackColor = true;
            this.btn_login.Click += new System.EventHandler(this.btn_login_Click);
            // 
            // panelResult
            // 
            this.panelResult.Controls.Add(this.label4);
            this.panelResult.Controls.Add(this.label5);
            this.panelResult.Controls.Add(this.comboBox1);
            this.panelResult.Controls.Add(this.label2);
            this.panelResult.Controls.Add(this.label3);
            this.panelResult.Location = new System.Drawing.Point(289, 91);
            this.panelResult.Name = "panelResult";
            this.panelResult.Size = new System.Drawing.Size(393, 377);
            this.panelResult.TabIndex = 8;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(146, 44);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(74, 20);
            this.label4.TabIndex = 8;
            this.label4.Text = "Location:";
            // 
            // label5
            // 
            this.label5.Anchor = System.Windows.Forms.AnchorStyles.Bottom;
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(41, 339);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(195, 20);
            this.label5.TabIndex = 9;
            this.label5.Text = "Close application to logout";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(868, 480);
            this.Controls.Add(this.panelLogin);
            this.Controls.Add(this.panelResult);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelLogin.ResumeLayout(false);
            this.panelLogin.PerformLayout();
            this.panelResult.ResumeLayout(false);
            this.panelResult.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TextBox usernameBox;
        private System.Windows.Forms.TextBox passwordBox;
        private System.Windows.Forms.Label label_error;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Panel panelLogin;
        private System.Windows.Forms.Panel panelResult;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button btn_login;
        private System.Windows.Forms.Label label_username;
        private System.Windows.Forms.Label label_password;
    }
}

