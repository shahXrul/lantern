using lantern.api.Operations.Contracts;

namespace lantern.api.Operations.Implementation
{
    public class MathematicalOps : MathematicalOperations
    {
        public int Add(int x, int y)
        {
            return x + y;
        }

        public int Divide(int x, int y)
        {
            if (y == 0)
            {
                throw new ArgumentException(nameof(x));
            }
            return x / y;
        }

        public int Multuply(int x, int y)
        {
            return x * y;
        }

        public int Substract(int x, int y)
        {
            return x - y;
        }
    }
}
