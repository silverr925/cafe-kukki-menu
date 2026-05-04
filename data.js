// --- Firebase Configuration ---
// TODO: Firebase Console'dan aldığınız config bilgilerini buraya yapıştırın
const firebaseConfig = {
    apiKey: "AIzaSyDtXk0kvBlDqj8HvSN4baZS0Qxs_sUMIXU",
    authDomain: "cafe-kukki-qr.firebaseapp.com",
    projectId: "cafe-kukki-qr",
    storageBucket: "cafe-kukki-qr.firebasestorage.app",
    messagingSenderId: "593935124307",
    appId: "1:593935124307:web:f8eb89a525bae9ed6183a6",
    measurementId: "G-VJRPXY1WHW"
};


// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    // Enable persistence for offline support
    db.enablePersistence().catch((err) => {
        console.error("Firestore persistence error:", err.code);
    });
}

// Default Data for Initial Setup
const defaultMenu = [
    // İÇECEKLER
    { id: 'p1', name: 'Espresso', category: 'İçecekler', price: 65, stock: 100 },
    { id: 'p2', name: 'Americano', category: 'İçecekler', price: 75, stock: 100 },
    { id: 'p3', name: 'Latte', category: 'İçecekler', price: 95, stock: 100 },
    { id: 'p4', name: 'Cappuccino', category: 'İçecekler', price: 95, stock: 100 },
    { id: 'p5', name: 'Flat White', category: 'İçecekler', price: 105, stock: 100 },
    { id: 'p6', name: 'Türk Kahvesi', category: 'İçecekler', price: 70, stock: 100 },
    { id: 'p7', name: 'Filtre Kahve', category: 'İçecekler', price: 80, stock: 100 },
    { id: 'p8', name: 'Iced Americano', category: 'İçecekler', price: 85, stock: 100 },
    { id: 'p9', name: 'Iced Latte', category: 'İçecekler', price: 110, stock: 100 },
    { id: 'p10', name: 'Limonata', category: 'İçecekler', price: 90, stock: 100 },
    { id: 'p11', name: 'Taze Portakal Suyu', category: 'İçecekler', price: 120, stock: 100 },
    { id: 'p12', name: 'Çay', category: 'İçecekler', price: 30, stock: 100 },
    { id: 'p13', name: 'Bitki Çayı', category: 'İçecekler', price: 75, stock: 100 },
    { id: 'p14', name: 'Su (Cam)', category: 'İçecekler', price: 25, stock: 100 },
    { id: 'p15', name: 'Maden Suyu', category: 'İçecekler', price: 40, stock: 100 },

    // YİYECEKLER
    { id: 'p16', name: 'Karışık Tost', category: 'Yiyecekler', price: 140, stock: 50 },
    { id: 'p17', name: 'Avokadolu Sandviç', category: 'Yiyecekler', price: 180, stock: 50 },
    { id: 'p18', name: 'Kruvasan Sandviç', category: 'Yiyecekler', price: 165, stock: 50 },
    { id: 'p19', name: 'Tavuklu Sezar Salata', category: 'Yiyecekler', price: 240, stock: 30 },
    { id: 'p20', name: 'Pesto Soslu Makarna', category: 'Yiyecekler', price: 220, stock: 30 },
    { id: 'p21', name: 'Hamburger', category: 'Yiyecekler', price: 280, stock: 30 },

    // TATLILAR
    { id: 'p22', name: 'San Sebastian', category: 'Tatlılar', price: 180, stock: 40 },
    { id: 'p23', name: 'Tiramisu', category: 'Tatlılar', price: 160, stock: 40 },
    { id: 'p24', name: 'Belçika Çikolatalı Sufle', category: 'Tatlılar', price: 175, stock: 40 },
    { id: 'p25', name: 'Magnolia', category: 'Tatlılar', price: 140, stock: 40 },
    { id: 'p26', name: 'Orman Meyveli Cheesecake', category: 'Tatlılar', price: 170, stock: 40 },
    { id: 'p27', name: 'Brownie', category: 'Tatlılar', price: 130, stock: 40 },

    // PİZZALAR
    { id: 'p28', name: 'Sucuk Sever (Orta)', category: 'Pizzalar', price: 350, stock: 50 },
    { id: 'p29', name: 'Sucuk Sever (Büyük)', category: 'Pizzalar', price: 410, stock: 50 },
    { id: 'p30', name: 'Çok Karışık (Orta)', category: 'Pizzalar', price: 370, stock: 50 },
    { id: 'p31', name: 'Çok Karışık (Büyük)', category: 'Pizzalar', price: 450, stock: 50 },
    { id: 'p32', name: 'Az Karışık (Orta)', category: 'Pizzalar', price: 320, stock: 50 },
    { id: 'p33', name: 'Az Karışık (Büyük)', category: 'Pizzalar', price: 390, stock: 50 },
    { id: 'p34', name: 'Egelim (Orta)', category: 'Pizzalar', price: 370, stock: 50 },
    { id: 'p35', name: 'Egelim (Büyük)', category: 'Pizzalar', price: 410, stock: 50 },
    { id: 'p36', name: 'Ton Ton (Orta)', category: 'Pizzalar', price: 350, stock: 50 },
    { id: 'p37', name: 'Ton Ton (Büyük)', category: 'Pizzalar', price: 410, stock: 50 },
    { id: 'p38', name: 'Pizzador Special (Orta)', category: 'Pizzalar', price: 480, stock: 50 },
    { id: 'p39', name: 'Pizzador Special (Büyük)', category: 'Pizzalar', price: 570, stock: 50 },
    { id: 'p40', name: 'Kavurmalım (Orta)', category: 'Pizzalar', price: 450, stock: 50 },
    { id: 'p41', name: 'Kavurmalım (Büyük)', category: 'Pizzalar', price: 510, stock: 50 },
    { id: 'p42', name: 'Hürrem Sultan (Orta)', category: 'Pizzalar', price: 450, stock: 50 },
    { id: 'p43', name: 'Hürrem Sultan (Büyük)', category: 'Pizzalar', price: 510, stock: 50 },
    { id: 'p44', name: 'Yangın Var (Orta)', category: 'Pizzalar', price: 450, stock: 50 },
    { id: 'p45', name: 'Yangın Var (Büyük)', category: 'Pizzalar', price: 510, stock: 50 },
    { id: 'p46', name: 'Et Obur (Orta)', category: 'Pizzalar', price: 470, stock: 50 },
    { id: 'p47', name: 'Et Obur (Büyük)', category: 'Pizzalar', price: 560, stock: 50 },
    { id: 'p48', name: 'Ot Obur (Orta)', category: 'Pizzalar', price: 350, stock: 50 },
    { id: 'p49', name: 'Ot Obur (Büyük)', category: 'Pizzalar', price: 410, stock: 50 }
];

const defaultTables = Array.from({ length: 16 }, (_, i) => ({
    id: `t${i + 1}`,
    name: `Masa ${i + 1}`,
    status: 'available',
    orders: [],
    paidAmount: 0
}));

const ADMIN_PIN = '1542';

// DataStore Wrapper for Local + Cloud
class DataStore {
    static init() {
        const CURRENT_VERSION = '1.5';
        const storedVersion = localStorage.getItem('cafe_pos_version');

        if (!localStorage.getItem('cafe_menu') || storedVersion !== CURRENT_VERSION) {
            localStorage.setItem('cafe_menu', JSON.stringify(defaultMenu));
            localStorage.setItem('cafe_pos_version', CURRENT_VERSION);
        }

        if (!localStorage.getItem('cafe_tables')) {
            localStorage.setItem('cafe_tables', JSON.stringify(defaultTables));
        }
        if (!localStorage.getItem('cafe_history')) {
            localStorage.setItem('cafe_history', JSON.stringify([]));
        }
        if (!localStorage.getItem('cafe_expenses')) {
            localStorage.setItem('cafe_expenses', JSON.stringify([]));
        }

        // --- Cloud Sync (Firestore) ---
        if (typeof db !== 'undefined') {
            // Listen for Menu Changes
            db.collection("settings").doc("menu").onSnapshot((doc) => {
                if (doc.exists) {
                    const cloudMenu = doc.data().items;
                    localStorage.setItem('cafe_menu', JSON.stringify(cloudMenu));
                    // Global event to notify UI to refresh
                    window.dispatchEvent(new Event('menuUpdated'));
                } else {
                    // Initial setup: upload default menu if empty
                    db.collection("settings").doc("menu").set({ items: defaultMenu });
                }
            });
        }
    }

    // --- Menu ---
    static getMenu() {
        return JSON.parse(localStorage.getItem('cafe_menu'));
    }

    static async addProduct(product) {
        const menu = this.getMenu();
        product.id = 'p' + Date.now();
        if (product.isFavorite === undefined) product.isFavorite = false;
        menu.push(product);
        this._saveMenu(menu);
    }

    static async updateProduct(productId, updates) {
        let menu = this.getMenu();
        const index = menu.findIndex(p => p.id === productId);
        if (index !== -1) {
            menu[index] = { ...menu[index], ...updates };
            this._saveMenu(menu);
        }
    }

    static async toggleFavorite(productId) {
        const menu = this.getMenu();
        const index = menu.findIndex(p => p.id === productId);
        if (index !== -1) {
            menu[index].isFavorite = !menu[index].isFavorite;
            this._saveMenu(menu);
        }
    }

    static async deleteProduct(productId) {
        let menu = this.getMenu();
        menu = menu.filter(p => p.id !== productId);
        this._saveMenu(menu);
    }

    static _saveMenu(menu) {
        localStorage.setItem('cafe_menu', JSON.stringify(menu));
        if (typeof db !== 'undefined') {
            db.collection("settings").doc("menu").set({ items: menu });
        }
    }

    // --- Tables ---
    static getTables() {
        return JSON.parse(localStorage.getItem('cafe_tables'));
    }

    static getTable(tableId) {
        const tables = this.getTables();
        return tables.find(t => t.id === tableId);
    }

    static updateTable(tableId, updates) {
        const tables = this.getTables();
        const index = tables.findIndex(t => t.id === tableId);
        if (index !== -1) {
            tables[index] = { ...tables[index], ...updates };
            if (updates.orders !== undefined) {
                tables[index].status = tables[index].orders.length > 0 ? 'occupied' : 'available';
            }
            localStorage.setItem('cafe_tables', JSON.stringify(tables));
        }
    }

    static moveTable(fromId, toId) {
        const tables = this.getTables();
        const fromIndex = tables.findIndex(t => t.id === fromId);
        const toIndex = tables.findIndex(t => t.id === toId);

        if (fromIndex !== -1 && toIndex !== -1) {
            const fromTable = tables[fromIndex];
            const toTable = tables[toIndex];

            tables[toIndex].orders = [...(toTable.orders || []), ...(fromTable.orders || [])];
            tables[toIndex].paidAmount = (toTable.paidAmount || 0) + (fromTable.paidAmount || 0);
            tables[toIndex].status = 'occupied';

            tables[fromIndex].orders = [];
            tables[fromIndex].paidAmount = 0;
            tables[fromIndex].status = 'available';

            localStorage.setItem('cafe_tables', JSON.stringify(tables));
            return true;
        }
        return false;
    }

    static getAdminPin() {
        return ADMIN_PIN;
    }

    // --- History / Transactions ---
    static getHistory() {
        return JSON.parse(localStorage.getItem('cafe_history'));
    }

    static addTransaction(tableId, tableName, total, method, orderItems) {
        const history = this.getHistory();
        const transaction = {
            id: 'trx_' + Date.now(),
            date: new Date().toISOString(),
            tableId,
            tableName,
            total,
            method,
            items: orderItems
        };
        history.unshift(transaction);
        localStorage.setItem('cafe_history', JSON.stringify(history));

        if (typeof db !== 'undefined') {
            db.collection("history").add(transaction);
        }
    }

    static updateTransaction(trxId, updates) {
        const history = this.getHistory();
        const index = history.findIndex(t => t.id === trxId);
        if (index !== -1) {
            history[index] = { ...history[index], ...updates };
            localStorage.setItem('cafe_history', JSON.stringify(history));
        }
    }

    // --- Expenses ---
    static getExpenses() {
        return JSON.parse(localStorage.getItem('cafe_expenses')) || [];
    }

    static addExpense(expense) {
        const expenses = this.getExpenses();
        expense.id = 'exp_' + Date.now();
        expense.date = expense.date || new Date().toISOString();
        expenses.unshift(expense);
        localStorage.setItem('cafe_expenses', JSON.stringify(expenses));

        if (typeof db !== 'undefined') {
            db.collection("expenses").add(expense);
        }
    }

    static updateExpense(expenseId, updates) {
        const expenses = this.getExpenses();
        const index = expenses.findIndex(e => e.id === expenseId);
        if (index !== -1) {
            expenses[index] = { ...expenses[index], ...updates };
            localStorage.setItem('cafe_expenses', JSON.stringify(expenses));
        }
    }

    static deleteExpense(expenseId) {
        let expenses = this.getExpenses();
        expenses = expenses.filter(e => e.id !== expenseId);
        localStorage.setItem('cafe_expenses', JSON.stringify(expenses));
    }
}

DataStore.init();
