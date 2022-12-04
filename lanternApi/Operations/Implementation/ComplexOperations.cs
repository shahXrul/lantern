using lantern.api.Operations.Contracts;

namespace lantern.api.Operations.Implementation
{
    public class ComplexOperations : IComplexOperations
    {
        public double GetCeilingValue(double x)
        {
            return Math.Ceiling(x);
        }

        public double GetFloorValue(double x)
        {
            return Math.Floor(x);
        }
    }
}
