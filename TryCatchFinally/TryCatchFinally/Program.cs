using System;

namespace TryCatchFinally
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] inputs;
            float ox, oy, tx, ty;
            try {
                Console.WriteLine("> This code will output a normalized vector by subtracting target from origin");
                Console.WriteLine("> Please input two floats separeted by ';' per field, e.g. 2,25;6,75 or 2;5,0");
                Console.Write("Origin point: ");
                inputs = Console.ReadLine().Split(';');
                ox = float.Parse(inputs[0]);
                oy = float.Parse(inputs[1]);
                Console.Write("Target point: ");
                inputs = Console.ReadLine().Split(';');
                tx = float.Parse(inputs[0]);
                ty = float.Parse(inputs[1]);
                Vector3 result = Direction(new Vector3(ox, oy), new Vector3(tx, ty));
                Console.WriteLine($"Resulting normalized vector is: {result.ToString()}");
            }
            catch (Exception e) {
                string type = e.GetType().Name.ToString();
                switch (type)
                {
                    case "FormatException":
                        Console.WriteLine("Your inputs are invalid i.e. they are not suitable floats or contain spaces.");
                        break;
                    case "IndexOutOfRangeException":
                        Console.WriteLine("You forgot to separate your float values by a semi-colon, ';'");
                        break;
                    default:
                        Console.WriteLine(type);
                        break;
                }
            }
            finally {
                Console.WriteLine("\nCode has been executed without crashing.\nPress any key to exit");
                Console.ReadKey();
            }

            Vector3 Direction(Vector3 origin, Vector3 target)
            {
                float x = target.x - origin.x;
                float y = target.y - origin.y;
                float unit = Convert.ToSingle(Math.Sqrt(x * x + y * y));
                return new Vector3(x / unit, y / unit);
            }
        }
    }

    public class Vector3 {
        public float x;
        public float y;
        public Vector3(float x, float y) {
            this.x = x;
            this.y = y;
        }
        public override string ToString() {
            return $"{{{x}}}, {{{y}}}";
        }
    }
}
