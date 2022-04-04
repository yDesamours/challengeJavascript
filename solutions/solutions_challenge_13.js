const solution1 = (arg) => arg.reduce((acc, cur) => acc[cur.Repas] ? (acc[cur.Repas]++, acc) : (acc[cur.Repas] = 1, acc), {})   
//not clear at all. I'll explain later
