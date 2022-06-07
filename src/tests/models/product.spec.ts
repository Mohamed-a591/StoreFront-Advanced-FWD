import ProductModel, { ProductCol } from '../../models/product.model'

const Product = new ProductModel()

describe('Product Model', () => {
  describe('Test methods define', () => {
    it('Expect methods [index, create, selectById, selectByCategoryName, delete] to be defined', () => {
      expect(Product.index).toBeDefined()
      expect(Product.create).toBeDefined()
      expect(Product.delete).toBeDefined()
      expect(Product.selectByCategoryName).toBeDefined()
      expect(Product.selectById).toBeDefined()
    })
  })

  describe('Product functionalty', () => {
    const product: ProductCol = {
      name: 'Product name',
      category: 'Category name',
      price: 2000,
      qty: 50
    }

    it('Insert Product', async () => {
      const result = await Product.create(product)
      expect(result).toBeTrue()
    })

    it('Select Product by category name', async () => {
      const result = await Product.selectByCategoryName(String(product.category))
      product.id = result[0].id
      expect(result[0]).toBeTruthy()
    })

    it('Select Product by id', async () => {
      const result = await Product.selectById(Number(product.id))
      expect(result[0]).toBeTruthy()
    })

    it('Delete Product by id', async () => {
      const result = await Product.delete(Number(product.id))
      expect(result).toBeTruthy()
    })
  })
})
