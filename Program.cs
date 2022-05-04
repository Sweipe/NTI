using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicGenericMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            Tracker<Vehicle> vehicleTracker = new Tracker<Vehicle>();
            Tracker<Armament> armsTracker = new Tracker<Armament>();
            Tracker<Equipment> equipmentTracker = new Tracker<Equipment>();

            vehicleTracker.Add(new Vehicle("XBS-50",50));
            vehicleTracker.Add(new Vehicle("LS Elite", 50));
            armsTracker.Add(new Armament("Type-100", 100));
            armsTracker.Add(new Armament("Type-102", 30));
            armsTracker.Add(new Armament("Type-119", 5));
            equipmentTracker.Add(new Equipment("Radio", 40));
            equipmentTracker.Add(new Equipment("Body Armor", 20));

            Console.WriteLine(vehicleTracker.GetByID(1));

            Console.WriteLine("Exit.");
            Console.ReadKey();
        }
    }

    class Tracker<T>
    {
        public Dictionary<int, T> items = new Dictionary<int, T>();
        private static int uniqueid = 0;
        public void Add(T item)
        {
            items.Add(uniqueid++, item);
        }
        public T GetByID(int id)
        {
            if(!items.TryGetValue(id, out T result))
            {
                return default;
            }
            return result;
        }
    }

    class Vehicle
    {
        public string name;
        public float speed;
        public Vehicle(string name, float speed)
        {
            this.name = name;
            this.speed = speed;
        }
    }

    class Armament
    {
        public string name;
        public int capacity;
        public Armament(string name, int capacity)
        {
            this.name = name;
            this.capacity = capacity;
        }
    }

    class Equipment
    {
        public string name;
        public float lifespan;
        public Equipment(string name, float lifespan)
        {
            this.name = name;
            this.lifespan = lifespan;
        }
    }
}
