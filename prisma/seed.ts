// Script de semilla para poblar la base de datos con datos iniciales
// Ejecutar con: npx tsx prisma/seed.ts

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Sembrando base de datos...\n");

  // ─── ADMIN ─────────────────────────────────────────────
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@minimarket.com" },
    update: {},
    create: {
      email: "admin@minimarket.com",
      password: adminPassword,
      name: "Administrador",
      phone: "70000000",
      role: "ADMIN",
    },
  });
  console.log("✅ Admin creado:", admin.email);

  // ─── CLIENTE DE PRUEBA ─────────────────────────────────
  const clientePassword = await bcrypt.hash("cliente123", 10);
  const cliente = await prisma.user.upsert({
    where: { email: "juan@email.com" },
    update: {},
    create: {
      email: "juan@email.com",
      password: clientePassword,
      name: "Juan Pérez",
      phone: "70000001",
      address: "Av. Busch #123, Zona Miraflores, La Paz",
      role: "CUSTOMER",
    },
  });
  console.log("✅ Cliente creado:", cliente.email);

  // ─── CATEGORÍAS ────────────────────────────────────────
  const categorias = [
    { name: "Lácteos", slug: "lacteos", description: "Leche, yogurt, queso, mantequilla" },
    { name: "Bebidas", slug: "bebidas", description: "Refrescos, jugos, agua, cerveza" },
    { name: "Panadería", slug: "panaderia", description: "Pan, galletas, pasteles" },
    { name: "Abarrotes", slug: "abarrotes", description: "Arroz, azúcar, harina, aceite" },
    { name: "Limpieza", slug: "limpieza", description: "Detergentes, desinfectantes, papel" },
    { name: "Snacks", slug: "snacks", description: "Papitas, chocolates, golosinas" },
    { name: "Carnes", slug: "carnes", description: "Pollo, res, cerdo, embutidos" },
    { name: "Frutas y Verduras", slug: "frutas-verduras", description: "Frescos del día" },
  ];

  for (const cat of categorias) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log("✅ Categorías creadas:", categorias.length);

  // ─── PRODUCTOS ─────────────────────────────────────────
  const productos = [
    // Lácteos
    { name: "Leche Pil 1L", slug: "leche-pil-1l", price: 7.50, stock: 50, categorySlug: "lacteos", description: "Leche entera Pil de 1 litro" },
    { name: "Yogurt Frutilla 1L", slug: "yogurt-frutilla-1l", price: 12.00, stock: 30, categorySlug: "lacteos", description: "Yogurt sabor frutilla" },
    { name: "Queso Fresco 500g", slug: "queso-fresco-500g", price: 18.00, stock: 20, categorySlug: "lacteos", description: "Queso fresco artesanal" },
    { name: "Mantequilla Pil 200g", slug: "mantequilla-pil-200g", price: 10.00, stock: 25, categorySlug: "lacteos", description: "Mantequilla con sal" },

    // Bebidas
    { name: "Coca-Cola 2L", slug: "coca-cola-2l", price: 12.00, stock: 40, categorySlug: "bebidas", description: "Gaseosa Coca-Cola 2 litros" },
    { name: "Agua Vital 2L", slug: "agua-vital-2l", price: 6.00, stock: 60, categorySlug: "bebidas", description: "Agua sin gas" },
    { name: "Cerveza Paceña 1L", slug: "cerveza-pacena-1l", price: 15.00, stock: 35, categorySlug: "bebidas", description: "Cerveza Paceña Centenario" },
    { name: "Jugo Del Valle 1.5L", slug: "jugo-del-valle-15l", price: 10.00, stock: 20, categorySlug: "bebidas", description: "Jugo de naranja natural" },

    // Panadería
    { name: "Pan Molde Blanco", slug: "pan-molde-blanco", price: 9.00, stock: 20, categorySlug: "panaderia", description: "Pan de molde fresco" },
    { name: "Galletas María", slug: "galletas-maria", price: 5.00, stock: 80, categorySlug: "panaderia", description: "Galletas María clásicas" },

    // Abarrotes
    { name: "Arroz 1kg", slug: "arroz-1kg", price: 7.00, stock: 100, categorySlug: "abarrotes", description: "Arroz grano de oro" },
    { name: "Azúcar 1kg", slug: "azucar-1kg", price: 6.00, stock: 80, categorySlug: "abarrotes", description: "Azúcar blanca refinada" },
    { name: "Aceite Fino 1L", slug: "aceite-fino-1l", price: 14.00, stock: 45, categorySlug: "abarrotes", description: "Aceite vegetal comestible" },
    { name: "Harina 1kg", slug: "harina-1kg", price: 5.50, stock: 60, categorySlug: "abarrotes", description: "Harina de trigo" },

    // Limpieza
    { name: "Detergente Omo 800g", slug: "detergente-omo-800g", price: 15.00, stock: 30, categorySlug: "limpieza", description: "Detergente en polvo" },
    { name: "Papel Higiénico Elite x4", slug: "papel-higienico-elite-x4", price: 10.00, stock: 50, categorySlug: "limpieza", description: "Pack de 4 rollos" },
    { name: "Cloro 1L", slug: "cloro-1l", price: 8.00, stock: 40, categorySlug: "limpieza", description: "Cloro concentrado" },

    // Snacks
    { name: "Papitas Lay's 150g", slug: "papitas-lays-150g", price: 10.00, stock: 35, categorySlug: "snacks", description: "Papas fritas clásicas" },
    { name: "Chocolate Cielo 100g", slug: "chocolate-cielo-100g", price: 8.00, stock: 40, categorySlug: "snacks", description: "Chocolate de leche boliviano" },

    // Carnes
    { name: "Pollo Entero", slug: "pollo-entero", price: 28.00, stock: 15, categorySlug: "carnes", description: "Pollo fresco entero ~2kg" },
    { name: "Salchichas Viena x6", slug: "salchichas-viena-x6", price: 12.00, stock: 25, categorySlug: "carnes", description: "Pack de 6 salchichas" },

    // Frutas y Verduras
    { name: "Tomate 1kg", slug: "tomate-1kg", price: 6.00, stock: 30, categorySlug: "frutas-verduras", description: "Tomate fresco" },
    { name: "Plátano x6", slug: "platano-x6", price: 5.00, stock: 40, categorySlug: "frutas-verduras", description: "6 unidades de plátano" },
    { name: "Papa 1kg", slug: "papa-1kg", price: 5.00, stock: 50, categorySlug: "frutas-verduras", description: "Papa huaycha" },
  ];

  for (const prod of productos) {
    const category = await prisma.category.findUnique({
      where: { slug: prod.categorySlug },
    });

    if (category) {
      await prisma.product.upsert({
        where: { slug: prod.slug },
        update: {},
        create: {
          name: prod.name,
          slug: prod.slug,
          description: prod.description,
          price: prod.price,
          stock: prod.stock,
          categoryId: category.id,
        },
      });
    }
  }
  console.log("✅ Productos creados:", productos.length);

  // ─── PEDIDO DE EJEMPLO ─────────────────────────────────
  const leche = await prisma.product.findUnique({ where: { slug: "leche-pil-1l" } });
  const pan = await prisma.product.findUnique({ where: { slug: "pan-molde-blanco" } });
  const azucar = await prisma.product.findUnique({ where: { slug: "azucar-1kg" } });

  if (leche && pan && azucar) {
    const pedido = await prisma.order.create({
      data: {
        userId: cliente.id,
        status: "ENTREGADO",
        total: leche.price * 2 + pan.price + azucar.price,
        deliveryAddress: cliente.address!,
        phoneContact: cliente.phone!,
        notes: "Tocar el timbre, hay perro suelto",
        items: {
          create: [
            { productId: leche.id, quantity: 2, price: leche.price },
            { productId: pan.id, quantity: 1, price: pan.price },
            { productId: azucar.id, quantity: 1, price: azucar.price },
          ],
        },
      },
    });
    console.log("✅ Pedido de ejemplo creado:", pedido.id);
  }

  console.log("\n🎉 ¡Base de datos lista!\n");
  console.log("Credenciales de prueba:");
  console.log("  Admin:    admin@minimarket.com / admin123");
  console.log("  Cliente:  juan@email.com / cliente123");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
