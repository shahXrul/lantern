using lantern.api.Operations.Implementation;

namespace lantern.tests
{
    public class TestMathOps
    {
        [Fact]
        public void TestAdd()
        {
            Assert.Equal(25, new MathematicalOps().Add(10, 15));
        }

        [Fact]
        public void TestSubtract()
        {
            Assert.Equal(25, new MathematicalOps().Substract(40, 15));
        }

        [Fact]
        public void TestMultiply()
        {
            Assert.Equal(60, new MathematicalOps().Multuply(12, 5));
        }

        [Fact]
        public void TestDivide()
        {
            Assert.Equal(25, new MathematicalOps().Divide(250, 10));
        }

        [Fact]
        public void TestFloor()
        {
            Assert.Equal(25, new ComplexOperations().GetFloorValue(25.8));
        }

        [Fact]
        public void TestCeiling()
        {
            Assert.Equal(25, new ComplexOperations().GetCeilingValue(24.2));
        }
    }
}