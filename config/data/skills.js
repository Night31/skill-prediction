/*	Notes:
	* '*' can be used in place of the skill or sub-skill to set default values
	* Processing order is 'noInterrupt' > 'chains' > 'abnormals'
	* Default race is Elin unless specified

	Races:
	0 = Male Human
	1 = Female Human
	2 = Male High Elf
	3 = Female High Elf
	4 = Male Aman
	5 = Female Aman
	6 = Male Castanic
	7 = Female Castanic
	8 = Popori
	9 = Elin
	10 = Baraka

	Refer to here for what races have its numbers already added: https://github.com/SaltyMonkey/skill-prediction/wiki 
	If a race doesn't have its own property therefore assumed to use the same default value.
*/

module.exports = {
	0: { // Warrior
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 32],
				noRetry: true,
				abnormals: {
					101750: { speed: 0.20 }
				}
			},
			0: {
				length: 566.4,
				distance: 64.29,
				race: {
					2: { distance: 47.53 }, // M.Helf: 47.534
					5: { distance: 45 }, // F.Aman: 45
					8: { distance: 54.32 }, // Popori: 54.32
					9: { distance: 64.29 } // Elin: 64.288
				}
			},
			1: {
				length: 657.3,
				distance: 51.69,
				race: {
					2: { distance: 42.12 }, // M.Helf: 42.117
					5: { distance: 39 }, // F.Aman: 39
					8: { distance: 21.17 }, // Popori: 21.171
					9: { distance: 51.69 } // Elin: 51.69
				}
			},
			2: {
				length: 657.3,
				distance: 28.08,
				race: {
					2: { distance: 28.08 }, // M.Helf: 28.078
					5: { distance: 26 }, // F.Aman: 26
					8: { distance: 56.2 }, // Popori: 56.196
					9: { distance: 28.08 } // Elin: 28.078
				}
			},
			3: {
				length: 900,
				distance: 73.34,
				race: {
					2: { distance: 79.9 }, // M.Helf: 79.897
					5: { distance: 85 }, // F.Aman: 85
					8: { distance: 63.53 }, // Popori: 63.529
					9: { distance: 73.34 } // Elin: 73.344
				}
			}
		},
		2: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 839,
				distance: 150,
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				noRetry: true,
				race: {
					7: { length: 837 },//casta fem
					8: { length: 1081 }, // Popori
					10: { length: 780 }// baraka... LUL WAT
				},
				noInterrupt: [2, 10, 32],
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				}

			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				noInterrupt: [32],
				race: {
					2: { distance: 75 }, // M.Helf
					8: { distance: 75 }, // Popori
					9: { distance: 68.26 } // Elin: 68.259
				}
			}
		},
		4: { // Rain of Blows
			'*': {
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf: 152.733
					5: { distance: 150.71 }, // F.Aman: 150.714
					8: { distance: 148.9 }, // Popori: 148.904
					9: { distance: 151.87 } // Elin: 151.867
				}
			},
			0: {
				length: 2545.45,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 32, 34, 35, 36, 37, 39],
				abnormals: {
					100801: { skill: 360100 }
				},
				chains: {
					18: 30,
					21: 30,
					27: 30
				}
			},
			30: {
				length: 2000,
				abnormals: {
					100801: { skill: 360130 }
				}
			}
		},
		5: { // Battle Cry
			0: {
				length: 1665,
				noInterrupt: [32],
				glyphs: {
					21040: { speed: 0.5 }
				}
			}
		},
		8: { // Assault Stance
			'*': {
				length: 566.4,
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 566.4,
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2066,
				noInterrupt: [2, 32],
				race: {
					3: { length: 2025 }, // F.Helf
					9: { length: 2025 } // Elin
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 933,
				distance: 35,
				noInterrupt: [32],
				race: {
					0: { length: 833 }, // M.Human
					1: { length: 833 }, // F.Human
					2: { // M.Helf
						length: 830,
						distance: 0
					},
					4: { length: 833 }, // M.Aman
					5: { // F.Aman
						length: 833,
						distance: 40
					},
					8: { // Popori
						length: 833,
						distance: 35
					},
					9: { distance: 54.85 },// Elin 54.582
				}
			}
		},
		12: { // Leaping Strike
			0: {
				CC: "extended",
				length: 1525,
				distance: 250,
				noInterrupt: [32],
				race: {
					2: { length: 1525 }, // M.Helf
					5: { length: 1525 }, // F.Aman
					7: { length: 1700 }, // F.Castanic
					8: { length: 1710 }, // Popori
					9: { length: 1525 } // Elin
				}
			}
		},
		/*13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noInterrupt: [32],
				noRetry: true
			}
		},*/
		16: { // Charging Slash
			0: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 467.88,
				noRetry: true,
				noInterrupt: [16, 32]
			},
			1: { length: 800 }
		},
		17: { // Vortex Slash
			0: {
				length: 1600,
				requiredBuff: 100400,
				noInterrupt: [32]
			}
		},
		18: { // Combative Strike
			'*': {
				length: 1100,
				distance: 120.28,
				noInterrupt: [32],
				race: {
					//2: { distance: 120.28 }, // M.Helf: 120.277
					//5: { distance: 120.28 }, // F.Aman: 120.277
					8: { distance: 128.89 }, // Popori: 128.889
					9: { distance: 138.28 } // Elin: 138.284
				}
			},
			0: true,
			1: true,
			2: true
		},
		19: { // Rising Fury
			'*': { noInterrupt: [32] },
			0: {
				length: 733,
				distance: 144.85,
				race: {
					2: { distance: 144.85 }, // M.Helf: 144.846
					5: { distance: 143.27 }, // F.Aman: 143.269
					8: { distance: 161.74 }, // Popori: 161.738
					9: { distance: 170.67 } // Elin: 170.671
				}
			},
			1: {
				length: 1400,
				distance: 100.15,
				race: {
					2: { distance: 100.11 }, // M.Helf: 100.114
					5: { distance: 101.69 }, // F.Aman: 101.689
					8: { distance: 116.63 }, // Popori: 116.629
					9: { distance: 122.34 } // Elin: 122.342
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 320,
				noInterrupt: [32]
			}
		},
		21: { // Cascade of Stuns
			0: { // Same animation as 2nd cast of Rising fury
				length: 1400,
				distance: 116.63,
				noInterrupt: [32],
				race: {
					2: { distance: 100.11 }, // M.Helf: 100.114
					8: { distance: 116.63 }, // Popori: 116.629
					9: { distance: 122.34 } // Elin: 122.342
				}
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1075,
				distance: 65.35,
				requiredBuff: 100700,
				abnormals: {
					100200: { chain: 6 },
					100201: { chain: 6 }
				},
				race: {
					2: { distance: 68.81 }, // M.Helf: 68.805
					8: { distance: 65.34 }, // Popori: 65.344
					9: { distance: 77.36 } // Elin: 77.359
				}
			}
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 500,
				noInterrupt: [32]
			}
		},
		25: { // Command: Attack
			0: { // 1060100 <- shadow-chan templateId
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		27: { // Pounce
			0: {
				length: 2000,
				distance: 180,
				noInterrupt: [32],
				glyphs: {
					21048: { speed: 0.3 },
					21082: { speed: 0.3 }
				}
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 28, 29, 32, 34, 36, 37, 39],
				chains: {
					11: 30,
					18: 30,
					27: 30
				},
				level: {
					9: {
						abnormals: {
							100201: { skill: 390100 }
						}
					}
				}
			},
			30: {
				length: 2666.66,
				distance: 210,
				level: {
					9: {
						abnormals: {
							100201: { skill: 390130 }
						}
					}
				}
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 27, 29, 34, 35, 36, 37],
				interruptibleWithAbnormal: {
					102010: 3
				},
				abnormals: {
					102010: { chain: 30 },
					100801: { skill: 370100 }
				},
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30,
					39: 30
				}
			},
			30: {
				length: 1333.33,
				distance: 135,
				abnormals: {
					100801: { skill: 370130 }
				}
			}
		},
		30: { // Scythe
			'*': { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 27, 28, 32, 34, 35, 39],
				abnormals: {
					100801: { skill: 380100 }
				},
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30
				}
			},
			30: {
				length: 1386,
				abnormals: {
					100801: { skill: 380130 }
				}
			}
		},
		31: { // Reaping Slash
			'*': { distance: 110 },
			0: {
				length: 2291,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 37, 39],
				chains: {
					4: 30,
					18: 30,
					36: 30
				}
			},
			30: { length: 1667 }
		},
		32: { // Cross Parry
			0: {
				CC: "extended",
				type: 'holdInfinite',
				fixedSpeed: 1,
				requiredBuff: [100200, 100201],
				stamina: 50,
			}
		},
		34: { // Binding Sword
			0: {
				length: 1902,
				noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 36, 37, 39]
			}
		},
		35: { // Infuriate
			0: {
				length: 2425,
				noInterrupt: [32],
				requiredBuff: [100200, 100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': {
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf: 152.733
					5: { distance: 150.71 }, // F.Aman: 150.714
					8: { distance: 148.9 }, // Popori: 148.904
					9: { distance: 151.87 } // Elin: 151.867
				}
			},
			0: {
				length: 2800,
				noInterrupt: [32]
			},
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			0: {
				length: 3000,
				distance: 94.5,
				abnormals: {
					102010: { chain: 30 }
				}
			},
			30: {
				length: 1333.33,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [32]
			},
			30: { length: 1387 }
		},
		39: { // Traverse Cut (Defensive Stance)
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 29, 32, 34, 36, 37, 39],
				chains: {
					11: 30,
					18: 30,
					27: 30
				}
			},
			30: {
				length: 2668,
				distance: 210
			}
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2] },
			0: {
				length: 635,
				distance: 74.45,
				race: {
					0: { distance: 78.55 }, // M.Human: 78.546
					2: { distance: 74.41 }, // M.Helf: 74.414
					4: { distance: 70 }, // M.Aman: 70
					5: { distance: 75 }, // F.Aman: 75
					8: { distance: 72.89 }, // Popori: 72.894
					9: { distance: 74.45 } // Elin: 74.453
				}
			},
			1: {
				length: 1025,
				distance: 19.2,
				race: {
					0: { distance: 25 }, // M.Human: 25
					2: { distance: 30.8 }, // M.Helf: 30.798
					4: { distance: 25 }, // M.Aman: 25
					5: { distance: 30.52 }, // F.Aman: 30.523
					8: { distance: 39.05 }, // Popori: 39.051
					9: { distance: 19.2 } // Elin: 19.2
				}
			},
			2: {
				length: 1818.12,
				distance: 66.07,
				race: {
					0: { distance: 70 }, // M.Human: 70
					2: { distance: 70 }, // M.Helf: 70
					4: { distance: 60 }, // M.Aman: 60
					5: { distance: 54.48 }, // F.Aman: 54.476
					8: { distance: 41.06 }, // Popori: 41.058
					9: { distance: 66.07 } // Elin: 66.07
				}
			}
		},
		2: { // Stand Fast
			0: {
				CC: "extended",
				type: 'holdInfinite',
				fixedSpeed: 1,
				stamina: 50,
			}
		},
		3: { // Onslaught
			'*': {
				distance: [0, 100, 100, 100, 100, 40],
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 15, 18, 21, 23, 24, 25, 26, 27],
				abnormals: {
					22060: { speed: 0.25 }
				},
				chains: {
					5: 30
				},
				race: {
					9: { distance: [0, 100, 100, 100, 100, 62.7] } // Elin
				}
			},
			0: { length: [939, 514.54, 514.54, 514.54, 393.63, 760.11] },
			30: { length: [688.66, 377.33, 377.33, 377.33, 288.66, 557.35] }
		},
		4: { // Challenging Shout
			0: {
				length: 2215,
				noInterrupt: [2],
				glyphs: {
					22056: { speed: 0.25 },
					22085: { speed: 0.25 }
				}
			}
		},
		5: { // Shield Bash
			0: {
				length: 839.1,
				distance: 30,
				noInterrupt: [2],
				race: {
					/*0: { distance: 30.000 }, // M.Human
					2: { distance: 30.000 }, // M.Helf
					4: { distance: 30.000 }, // M.Aman
					5: { distance: 30.000 }, // F.Aman
					8: { distance: 30.000 }, // Popori*/
					9: { distance: 43.69 } // Elin: 43.693
				}
			}
		},
		7: { // Guardian Shout
			0: {
				length: 566.4,
				noInterrupt: [2],
				race: {
					/*0: { length: 550 }, // M.Human
					2: { length: 550 }, // M.Helf
					4: { length: 550 }, // M.Aman
					5: { length: 550 }, // F.Aman*/
					8: { length: 800 }, // Popori
					9: { length: 575 }, // Elin
				}
			}
		},
		8: { // Shield Counter
			0: {
				length: 1455.33,
				distance: 90,
				onlyDefenceSuccess: true,
				race: {
					0: { distance: 90 }, // M.Helf: 90
					2: { distance: 95 }, // M.Helf: 95
					4: { distance: 85 }, // M.Aman: 85
					5: { distance: 85 }, // F.Aman: 85
					8: { distance: 90 }, // Popori: 90
					9: { distance: 108.06 } // Elin: 108.063
				}
			}
		},
		9: { // Leash
			0: {
				length: [725, 850], //633,833 in DC
				noInterrupt: [2]
			}
		},
		10: { // Debilitate
			0: { // Same animation as shield bash, just slower
				length: 925,
				distance: 30, // Seems pretty equalized
				noInterrupt: [2],
				race: {
					/*0: { distance: 30 }, // M.Human
					2: { distance: 30 }, // M.Helf
					4: { distance: 30}, // M.Aman
					5: { distance: 30 }, // F.Aman
					8: { distance: 30 }, // Popori*/
					9: { distance: 43.69 } // Elin: 43.693
				}
			}
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true,
				noInterrupt: [2],
				race: {
					9: { length: 1625 } // Elin, also this?
				}
			}
		},
		12: { // Infuriate
			0: {
				length: 2425,
				noInterrupt: [2]
			}
		},
		13: { // Spring Attack
			0: {
				length: 2800,
				distance: 85,
				noInterrupt: ['1-0', '1-1', 2, 3, 4, 9, 11, 12, 13, 15, '18-0', 21, 23, 24, 25, 26, 27],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30
				}
			},
			30: {
				length: 1850,
				distance: 85
			}
		},
		15: { // Charging Lunge
			0: {
				CC: "extended",
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 474.5,
				noInterrupt: [2, 15]
			},
			1: {
				length: 935,
				noInterrupt: [2]
			}
		},
		16: { // Second Wind
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		17: { // Adrenaline Rush
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		18: { // Shield Barrage
			'*': { noInterrupt: [2] },
			0: {
				length: 625,
				distance: 95, // M.Aman
				abnormals: {
					201550: { speed: 0.2 }
				},
				race: {
					0: { distance: 100.13 }, // M.Human: 100.125
					2: { // M.Helf: 525, 102.701
						length: 525,
						distance: 102.7
					},
					4: { distance: 95 }, // M.Aman: 95
					5: { distance: 100.13 }, // F.Aman: 100.125
					8: { distance: 92.39 }, // Popori: 92.39
					9: { distance: 122.66 } // Elin: 122.66
				}
			},
			1: {
				length: 800,
				distance: 87, // M.Aman
				race: {
					0: { distance: 74.84 }, // M.Human: 74.836
					2: { distance: 80.43 }, // M.Helf: 80.428
					4: { distance: 87 }, // M.Aman: 87
					5: { distance: 74.84 }, // F.Aman: 74.836
					8: { distance: 89.46 }, // Popori: 89.462
					9: { distance: 66.04 } // Elin: 66.043
				}
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000,
				noInterrupt: [2]
			}
		},
		20: { // Menacing Wave
			0: {
				fixedSpeed: 1,
				length: [700, 800], // 715, 815
				noInterrupt: [2]
			}
		},
		21: { // Lockdown Blow
			0: { // Same animation as 1st cast of shield barrage, just slower
				length: 1400,
				distance: 100.13, // M.Human, 100.126
				noInterrupt: [2],
				race: {
					0: { distance: 100.13 }, // M.Human: 100.125
					2: { // M.Helf: 1175, 102.701
						length: 1175,
						distance: 102.7
					},
					4: { distance: 95 }, // M.Aman: 95
					5: { distance: 100.13 }, // F.Aman: 100.125
					8: { distance: 92.39 }, // Popori: 92.39
					9: { distance: 122.66 } // Elin: 122.66
				}
			}
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800,
				noInterrupt: [2]
			}
		},
		23: { // Master's Leash
			0: {
				length: [725, 850],
				requiredBuff: 201000,
				noInterrupt: [2]
			}
		},
		24: { // Chained Leash
			0: {
				length: [725, 850],
				noInterrupt: [2]
			}
		},
		25: { // Wallop
			'*': {
				CC: "extended",
			},
			0: {
				length: 2375,
				distance: 100,
				noInterrupt: [1, 2, 3, 4, 5, 9, 11, 12, '18-0', 21, 23, 24, 25, 26, 27],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30
				}
			},
			30: {
				length: 1900, // 1910
				distance: 100
			}
		},
		26: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 733,
				distance: -150,
				forceClip: true,
				stamina: 800,
				instantStamina: true,
				noInterrupt: [2, 26],
				glyphs: {
					22067: { stamina: -100 },
					22089: { stamina: -100 }
				},
			}
		},
		27: { // Rallying Cry
			0: { // Same animation as guardian shout, just slower
				length: 620,
				noInterrupt: [2],
				race: {
					/*0: { length: 625 }, // M.Human
					2: { length: 625 }, // M.Helf
					4: { length: 625 }, // M.Aman
					5: { length: 625 }, // F.Aman*/
					8: { length: 950 }, // Popori
					9: { length: 650 }, // Elin
				}
			}
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: {
				length: 750,
				distance: 36.68,
				race: {
					0: { distance: 36.68 }, // M.Human: 36.679
					2: { distance: 50.68 }, // M.Helf: 50.68
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 36.68 }, // F.Aman: 36.68
					6: { distance: 36.68 }, // M.Casta: 36.68
					7: { distance: 60 }, // F.Casta: 60
					8: { distance: 31.53 }, // Popori: 31.526
					9: { distance: 36.68 }, // Elin: 36.68
					10: { distance: 25.08 } // Baraka: 25.076
				}
			},
			1: {
				length: 1030,
				distance: 35.68,
				race: {
					0: { distance: 35.68 }, // M.Human: 35.675
					2: { distance: 30.68 }, // M.Helf: 30.675
					4: { distance: 35 }, // M.Aman: 35
					5: { distance: 35.68 }, // F.Aman: 35.675
					6: { distance: 35.68 }, // M.Casta: 35.675
					7: { distance: 17 }, // F.Casta: 17
					8: { distance: 49.4 }, // Popori: 49.396
					9: { distance: 35.68 }, // Elin: 35.675
					10: { distance: 32.95 } // Baraka: 32.952
				}
			},
			2: {
				length: 750,
				distance: 28.05,
				race: {
					0: { distance: 28.05 }, // M.Human: 28.054
					2: { distance: 33.05 }, // M.Helf: 33.054
					4: { distance: 20 }, // M.Aman: 20
					5: { distance: 28.05 }, // F.Aman: 28.054
					6: { distance: 22.3 }, // M.Casta: 22.302
					7: { distance: 23 }, // F.Casta: 23
					8: { distance: 19.33 }, // Popori: 19.333
					9: { distance: 28.05 }, // Elin: 28.504
					10: { distance: 22.5 } // Baraka: 22.5
				}
			},
			3: {
				length: 1650,
				distance: 46.76,
				race: {
					0: { distance: 46.76 }, // M.Human: 46.758
					2: { distance: 46.76 }, // M.Helf: 46.578
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 64.36 }, // F.Aman: 64.359
					6: { distance: 118.2 }, // M.Casta: 118.202
					7: { distance: 45 }, // F.Casta: 45
					8: { distance: 19.85 }, // Popori: 19.848
					9: { distance: 46.76 }, // Elin: 46.757
					10: { distance: 37.5 } // Baraka: 37.5
				}
			}
		},
		2: { // Knockdown Strike
			'*': {
				consumeAbnormal: 23220,
				length: 2835,
				distance: 220.47,
				abnormals: {
					23070: { speed: 0.25 }
				},
				chains: { 14: 30 },
				race: {
					//0: { distance: 220.47 }, // M.Human: 220.47
					2: { distance: 220.15 }, // M.Helf: 220.153
					4: { distance: 155 }, // M.Aman: 155
					5: { distance: 174.84 }, // F.Aman: 174.837
					6: { distance: 201.64 }, // M.Casta: 201.639
					7: { distance: 200 }, // F.Casta: 200
					8: { distance: 175.81 }, // Popori: 175.811
					//9: { distance: 220.47 }, // Elin: 220.47
					10: { distance: 205.95 } // Baraka: 205.953
				}
			},
			0: true, // type: change, pendingType: normal
			1: true, // type: normal, pendingType: normal
			2: { noInterrupt: [1, 2, 3, 6, 8, 9, 10, 12, 13, 15, 16, 17, 24, 25] }, // type: connect(30), pendingType: immediateCancel (chain Parent, Super cancel)
			30: { length: 2435 } // type: normal, pendingType: immediateCancel (Chain Child, Super cancel)
		},
		3: { // Whirlwind
			0: {
				length: 2880, // 2900 before
				distance: 128.69,
				abnormals: {
					301150: { speed: 0.20 },
					23080: { speed: 0.25 }
				},
				race: {
					0: { distance: 123.21 }, // M.Human: 123.208
					2: { distance: 116.49 }, // M.Helf: 116.489
					4: { distance: 125 }, // M.Aman: 125
					5: { distance: 137.22 }, // F.Aman: 137.221
					6: { distance: 123.21 }, // M.Casta: 123.208
					7: { distance: 155 }, // F.Casta: 155.004
					8: { distance: 116.09 }, // Popori: 116.085
					9: { distance: 128.69 }, // Elin: 128.691
					10: { distance: 91.21 } // Baraka: 91.21
				}
			}
		},
		4: { // Evasive Roll
			'*': {
				CC: ["evasive", "extended"],
				length: 909.1,
				distance: 150,
				forceClip: true,
				noRetry: true,
				noInterrupt: [4],
				race: {
					8: {	// Popori: 150.316, 1185
						distance: 150.32,
						length: 1181.8
					}
				}
			},
			0: true,
			30: { requiredBuff: 301200 }
		},
		5: { // Dash
			0: {
				CC: "evasive",
				withoutWeapon: true,
				fixedSpeed: 1,
				length: 700,
			}
		},
		8: { // Overhand Strike
			'*': {
				distance: 169.5,
				race: {
					0: { distance: 171.14 }, // M.Human: 171.138
					2: { distance: 171.14 }, // M.Helf: 171.138
					4: { distance: 145 }, // M.Aman: 145
					5: { distance: 134.53 }, // F.Aman: 134.532
					6: { distance: 161.14 }, // M.Casta: 161.138
					7: { distance: 170 }, // F.Casta: 170
					8: { distance: 150 }, // Popori: 150
					9: { distance: 169.65 }, // Elin: 169.648
					10: { distance: 151.14 } // Baraka: 151.138
				}
			},
			0: {
				length: 3365,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 21, 25],
				abnormals: {
					300801: { skill: 250100 }
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					24: 30
				}
			},
			30: {
				length: 1325, //
				abnormals: {
					300801: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				CC: "extended",
				length: 2175,
				distance: 250,
			}
		},
		10: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noRetry: true
			}
		},
		12: { // Heart Thrust
			0: {
				length: 2320,
				distance: 180.96,
				abnormals: {
					23060: { speed: 0.25 },
					23061: { speed: 0.35 }
				},
				race: {
					0: { distance: 166.56 }, // M.Human: 166.555
					2: { distance: 173.75 }, // M.Helf: 173.752
					4: { distance: 175 }, // M.Aman: 175
					5: { distance: 166.56 }, // F.Aman: 166.555
					6: { distance: 168.61 }, // M.Casta: 168.612
					7: { distance: 230 }, // F.Casta: 230, wind down animation moves her a lot
					8: { distance: 174.05 }, // Popori: 174.05
					9: { distance: 180.96 }, // Elin: 180.962
					10: { distance: 136.55 } // Baraka: 136.554
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2125, //2150 before 
				distance: 76.71,
				race: {
					0: { distance: 62.07 }, // M.Human: 62.073
					2: { distance: 55.79 }, // M.Helf: 55.787
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 62.07 }, // F.Aman: 62.073
					6: { distance: 86.12 }, // M.Casta: 86.124
					7: { distance: 80 }, // F.Casta: 80
					8: { distance: 56.49 }, // Popori: 56.491
					9: { distance: 76.71 }, // Elin: 76.706
					10: { distance: 47.07 } // Baraka: 47.072
				}
			}
		},
		14: { // Distant Blade
			'*': {
				triggerAbnormal: { 23220: 2000 },
				length: 600,
				distance: 75
			},
			0: {
				race: {
					2: { distance: 79.01 }, // M.Helf: 79.014
				}
			},
			1: {
				race: {
					2: { distance: 70.99 }, // M.Helf: 70.986
					5: { distance: 100.02 }, // F.Aman: 100.018
					9: { distance: 100.02 } // Elin: 100.018
				}
			},
			2: {
				length: 1500,
				distance: 120,
				race: {
					5: { distance: 94.98 }, // F.Aman: 94.983
					6: { distance: 150 }, // M.Casta: 150
					8: { distance: 112.42 }, // Popori: 112.417
					9: { distance: 104.82 } // Elin: 104.818
				}
			}
		},
		15: { // Startling Kick
			0: {
				CC: ["evasive", "extended"],
				length: 1500,
				distance: -175,
				forceClip: true,
				glyphs: {
					23060: { speed: 0.25 }
				},
			}
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 100,
				race: {
					0: { distance: 96.26 }, // M.Human: 96.255
					2: { distance: 103.85 }, // M.Helf: 103.848
					4: { distance: 100 }, // M.Aman: 100
					5: { distance: 96.25 }, // F.Aman: 96.25
					6: { distance: 135.85 }, // M.Casta: 135.847
					7: { distance: 140 }, // F.Casta: 140
					8: { distance: 141.74 }, // Popori: 141.738
					9: { distance: 142.53 }, // Elin: 142.53
					10: { distance: 100 } // Baraka: 100
				}
			}
		},
		17: { // Headlong Rush
			0: {
				CC: ["evasive", "extended"],
				type: 'dash',
				emulateAttackSpeedBonus: 60,
				fixedSpeed: 1,
				length: 980,
				distance: 413, //not sure - seems borked
				race: {
					0: { distance: 420 },// M.Human
					4: { distance: 420 },// M.Aman
					7: { distance: 419.33 }, //F.Casta 419.328
					10: { distance: 420 } // Baraka, 420.018
				},
				level: [
					{ emulateAttackSpeedBonus: 40 },
					{ emulateAttackSpeedBonus: 50 }
				],
				noInterrupt: [17],
				noRetry: true
			}
		},
		18: { // Overpower
			0: {
				fixedSpeed: 1,
				length: 200,
				noInterrupt: [18]
			}
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
		},
		20: { // In Cold Blood
			0: {
				triggerAbnormal: { 23220: 2000 },
				fixedSpeed: 1,
				emulateAttackSpeedBonus: 8,
				length: 1200,
				level: {
					1: { emulateAttackSpeedBonus: 6 }
				}
			}
		},
		21: { // Exhausting Blow
			0: {
				length: 1175,
				distance: 75
			},
		},
		23: { // Measured Slice
			'*': {
				distance: 189, // Sometimes 190 but most of the time 189
				races: {
					5: { distance: 190 }, // F.Aman
					10: { distance: 190 } // Baraka
				}
			},
			0: {
				length: 3685,
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22],
				chains: {
					8: 30,
					24: 30,
					25: 30
				}
			},
			30: { length: 1670 } // Maybe 1675~1700
		},
		24: { // Eviscerate
			0: {
				length: 1925,
				distance: 50,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, 14, 16, 17, 21, 22, 24],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					25: 30
				}
			},
			30: {
				length: 1525, //
				distance: 100
			}
		},
		25: { // Ultimate Overhand Strike
			'*': {
				distance: 169.5,
				race: {
					0: { distance: 171.14 }, // M.Human: 171.138
					2: { distance: 171.14 }, // M.Helf: 171.138
					4: { distance: 145 }, // M.Aman: 145
					5: { distance: 134.53 }, // F.Aman: 134.532
					6: { distance: 161.14 }, // M.Casta: 161.138
					7: { distance: 170 }, // F.Casta: 170
					8: { distance: 150 }, // Popori: 150
					9: { distance: 169.65 }, // Elin: 169.648
					10: { distance: 151.14 } // Baraka: 151.138
				}
			},
			0: { length: 3365 },
			30: { length: 1325 } //
		}
	},
	3: { // Berserker / There's a lot of unneeded no interrupts currently since sGrantSkill is emulated now, this applies for all charging skills
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 2, 4],
				noRetry: true
			},
			0: {
				length: 1111.8,
				distance: 78,
				race: {
					3: { distance: 63.24 }, // F.Helf: 63.236
					4: { distance: 27.715 }, // M.Aman
					5: { // F.Aman
						length: 1081.8,
						distance: 62
					},
					6: { distance: 55.69 }, // M.Casta: 56.687
					8: { distance: 48.89 }, // Popori: 48.886
					10: { distance: 44.22 } // Baraka: 44.217
				}
			},
			1: {
				length: 925,
				distance: 21.05,
				race: {
					3: { distance: 27.38 }, // F.Helf: 27.382
					4: { distance: 25 },	// M.Aman: 25
					6: { distance: 23.27 }, // M.Casta: 23.274
					8: { distance: 7.06 }, // Popori: 7.06
					9: { distance: 21.05 }, // Elin: 21.05
					10: { distance: 21.09 } // Baraka: 21.085
				}
			},
			2: {
				length: 1120,
				distance: 31.84,
				race: {
					3: { distance: 32.47 }, // F.Helf: 32.474
					4: { distance: 25 },	// M.Aman: 25
					6: { distance: 22.83 }, // M.Casta: 22.833
					8: { distance: 40.93 }, // Popori: 40.926
					9: { distance: 31.84 }, // Elin: 31.842
					10: { distance: 20.68 } // Baraka: 20.676
				}
			},
			3: {
				length: 1825,
				distance: 54.28,
				race: {
					3: { distance: 55.25 }, // F.Helf: 55.251
					4: { distance: 45 }, // M.Aman
					6: { distance: 59.47 }, // M.Casta: 59.467
					8: { distance: 43.68 }, // Popori: 43.68
					9: { distance: 54.29 }, // Elin: 54.285
					10: { distance: 63.26 } // Baraka: 63.257
				}
			}
		},
		2: { // Axe Block
			'*': {
				CC: "extended",
				type: 'holdInfinite',
			},
			0: { fixedSpeed: 1 },
			30: true,
			31: { fixedSpeed: 1 }
		},
		3: { // Thunderstrike
			'*': {
				length: 1748,
				abnormals: {
					24170: { speed: 0.25 }
				},
				noRetry: true
			},
			0: {
				type: 'charging',
				consumeAbnormal: 400900,
				length: [650, 650, 650],
				noInterrupt: [2, 4, 10, 15, 18, 24, 25, 30],
				//lastChargeStage: 2000,
				glyphs: {
					24067: {
						chargeSpeed: 0.25 // only value that affects last charge state duration
					}
				},
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				level: [
					{ length: 800 },	// 1300
					{ length: [800, 800] },	// 1150
					{ length: [800, 800] }	// 1150
				]
			},
			10: {
				distance: 87.28, // 87.272 Cast F. - TODO
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			11: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			12: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			13: {
				distance: 69.7,
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				},
				enableVB: true,
				pendingStartTime: 454.54
			}
		},
		4: { // Flatten
			'*': {
				length: 3125, // 3100 pori?
				distance: 105.685,
				glyphs: {
					24008: { speed: 0.25 },
					24050: { speed: 0.25 }
				},
				abnormals: {
					24100: { speed: 0.25 },
					24101: { speed: 0.30 }
				},
				race: {
					3: { distance: 90.6 }, // F.Helf: 90.601
					4: { distance: 80 }, // M.Aman: 80
					6: { distance: 75 }, // M.Casta: 75
					8: { distance: 73.34 }, // Popori: 73.344
					9: { distance: 105.69 }, // Elin: 105.685
					10: { distance: 70.23 } // Baraka: 70.227
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '8-30', '10-10', '10-11', '10-12', 11, '10-13', 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '16', '18-10', '18-11', '18-12', '18-13', 24, 27, 28, 29, 30, 31, '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					6: 30,
					25: 30,
					32: 31
				}
			},
			1: {
				chains: {
					6: 31,
					25: 31
				}
			},
			30: { length: 2350 }, //
			31: { length: 2350 }
		},
		5: { // Dash
			0: {
				withoutWeapon: true,
				CC: "evasive",
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2],
			}
		},
		6: { // Sweeping Strike
			'*': {
				length: 1285,
				distance: 80.47,
				noRetry: true,
				race: {
					3: { distance: 71.34 }, // F.Helf: 71.336
					4: { distance: 50.07 }, // M.Aman: 50.071
					6: { distance: 66.21 }, // M.Casta: 66.21
					8: { distance: 53.41 }, // Popori: 53.412
					9: { distance: 80.47 }, // Elin: 80.468
					10: { distance: 70 } // Baraka: 70
				}
			},
			0: {
				noInterrupt: [2],
				interruptibleWithAbnormal: {
					401404: 2
				},
				abnormals: {
					401400: { chain: 30 }
				}
			},
			1: true,
			30: true,
		},
		7: { // Mocking Shout
			0: {
				fixedSpeed: 1,
				length: [308, 1079],
				noInterrupt: [2],
				noRetry: true
			}
		},
		8: { // Fiery Rage
			'*': { noInterrupt: [2] },
			0: {
				fixedSpeed: 1,
				length: [450, 605] // Idk if Helf is longer but i'm getting this
			},
			30: {
				length: 1760, // /Need M.Casta
				requiredBuff: 401400
			}
		},
		10: { // Cyclone
			'*': { noRetry: true },
			0: {
				type: 'charging',
				consumeAbnormal: 400900,
				length: [650, 650, 650],
				noInterrupt: [2, 3, 4, 15, 18, 24, 25, 30],
				//lastChargeStage: 2000,
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: {
						chargeSpeed: 0.3
					}
				},
				abnormals: {
					24190: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401400: { chain: 6 }
				},
				level: [
					{ length: 800 },	// 1300
					{ length: [800, 800] },	// 1150
					{ length: [800, 800] }	// 1150
				]
			},
			10: {
				length: 1350, // Cast F. - TODO
				distance: 50,
				noInterrupt: [2, 4, 24, 25, 30],
				races: {
					3: { length: 1800 }	// F.Helf
				}
			},
			11: {
				length: [375, 375, 1350],
				distance: [33.33, 33.33, 50],
				noInterrupt: [2, 4, 24, 25, 30],
				races: {
					3: { length: [375, 375, 1800] }	// F.Helf
				}
			},
			12: {
				length: [375, 375, 375, 375, 1350],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				noInterrupt: [2, 4, 24, 25, 30],
				races: {
					3: { length: [375, 375, 375, 375, 1800] }	// F.Helf
				}
			},
			13: {
				length: [375, 375, 375, 375, 1350],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				noInterrupt: [2, 4, 15, 24, 25, 30],
				races: {
					3: { length: [375, 375, 375, 375, 1800] }	// F.Helf
				},
				enableVB: true,
				pendingStartTime: 300 // 300 / timeRate = 1
			}
		},
		11: { // Leaping Strike 
			0: {
				CC: "extended",
				length: 2190, // 2185
				distance: 250,
				noInterrupt: [2],
			}
		},
		12: { // Unchained Anger
			'*': {
				length: [1035, 550],
				noInterrupt: [2]
			},
			30: true,
			31: true
		},
		13: { // Retaliate (TODO: Check)
			0: {
				type: 'retaliate',
				length: 1625,
				noInterrupt: [2],
				noRetry: true
			}
		},
		15: { // Vampiric Blow  //         Uncomment this for being able to VB if, a VB chain is avaiable, else, it won't work
			'*': { length: 1930 },            // Usage:            1. "Show default Chained Skills" in the Chained Skills menu must be on.        		                               
			0: {                             //                    2. Must be in combat when used.  
				type: 'charging',           //                    Else the animation of VB won't go off causing slight desync.
				consumeAbnormal: 400900,
				length: [800, 800, 800],
				noInterrupt: [2, '3-0', 4, '10-0', 15, '18-0', 24, 25, 30], // VB can't chain from stages 10, 11 or 12 in the client, it only can on stages 13
				lastChargeStage: 2000,
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				chains: {
					'3-13': 14, // this is fine though maybe uneeded, 13: 14 does the same
					'10-13': 14,
					'18-13': 14
				},
				level: [
					{ length: 800 },	// 1600
					{ length: [800, 800] },	// 1600
					{ length: [800, 800] }	// 1600
				]
			},
			10: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			11: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			12: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			13: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			14: {
				distance: 87.28, // 87.272
				noInterrupt: [15],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			}
		},
		16: { // Fearsome Shout
			0: {
				fixedSpeed: 1,
				length: [700, 1425],
				noInterrupt: [2]
			}
		},
		18: { // Lethal Strike
			'*': {
				length: 1500,
				noRetry: true
			},
			0: {
				type: 'charging',
				consumeAbnormal: 400900,
				length: [800, 800, 800],
				noInterrupt: [2, 3, 4, 10, 15, 24, 25, 30],
				abnormals: {
					24120: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401400: { chain: 6 }
				},
				level: [
					{ length: 800 },	// 1600
					{ length: [800, 800] },	// 1600
					{ length: [800, 800] }	// 1600
				]
			},
			10: {
				distance: 167.63, // 167.624
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			11: {
				distance: 167.63, // 167.624
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			12: {
				distance: 167.63, // 167.624
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			13: {
				distance: 167.63, // 167.624
				noInterrupt: [2, 4, 15, 24, 25, 30],
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				},
				enableVB: true,
				pendingStartTime: 500 // 500 / timeRate = 1
			}
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 710],
				noInterrupt: [2]
			}
		},
		20: { // Inescapable Doom
			0: {
				fixedSpeed: 1,
				length: [600, 900],
				noInterrupt: [2]
			}
		},
		21: { // Bloodlust
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		24: { // Evasive Smash
			'*': {	// Same animation as lethal strike cast, just slower
				length: 1635, // 1630
				distance: 167.63, // 167.624
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			0: {
				CC: "evasive",
				type: 'storeCharge',
				length: 1020.9,
				distance: 150,
			},
			5: { type: 'grantCharge' },
			10: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] }, // check noInterrupts
			11: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			12: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			13: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] }
		},
		25: { // Raze
			'*': {
				length: 1200,
				distance: 96,
				glyphs: {
					24078: { speed: 0.25 }
				}
			},
			0: {
				noInterrupt: [2, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, '32-0'],
				interruptibleWithAbnormal: {
					401404: 2
				},
				abnormals: {
					401404: { chain: 31 }
				},
				chains: {
					1: 30,
					30: 31,
					31: 30,
					32: 31
				}
			},
			1: true,
			30: { length: 960 },
			31: { length: 960 }
		},
		26: { // Tackle
			0: {
				length: 1010,
				distance: 80,
				noInterrupt: [2]
			}
		},
		27: { // Unbreakable /Need M.Casta
			0: {
				length: 2100,
				noInterrupt: [2]
			},
		},
		28: { // Intimidation /Need M.Casta
			0: {
				length: 1560,
				noInterrupt: [2]
			},
			50: {
				length: 1560,
				noInterrupt: [2]
			}
		},
		29: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 909.1,
				distance: 150,
				forceClip: true,
				noInterrupt: [2, 29],
			}
		},
		30: { // Axe Counter
			'*': {
				length: 655,
				distance: 21.05,
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402,
				chains: { 2: 30 },
				race: {
					4: {
						distance: 25
					},
					8: { // Popori, just WTF
						length: 1188,
						distance: 240.4
					},
					9: { distance: 21.05 }, // Elin: 21.05
					10: { distance: 21.08 } // Baraka: 21.084
				}
			},
			0: true,
			30: true
		},
		31: { // Overwhelm
			0: {
				CC: "extended",
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 470,
				noInterrupt: [2, 31],
				noRetry: true
			},
			1: {
				length: 1335
			}
		},
		32: { // Punishing Strike /Need M.Casta
			0: {
				length: 790,
				distance: 31.58,
				noInterrupt: [2],
				requiredBuff: 401400,
				race: {
					4: { distance: 37.5 },
					8: {
						length: 925,
						distance: 61.39
					},
					9: { distance: 31.58 }, // Elin: 31.575
					10: { distance: 31.63 } // Baraka: 31.628
				}
			},
			1: {
				length: 810,
				distance: 134.1,
				race: {
					4: { distance: 116 },
					8: { distance: 192.32 }, // Popori: 192.319
					9: { distance: 134.1 }, // Elin: 134.1
					10: { distance: 126.49 } // Baraka: 126.49
				}
			}
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 730 }
		},
		2: { // Frost Sphere
			0: {
				length: 800,
				race: {
					4: { length: 1250 }, // Male Aman
					9: { length: 1000 }, // Elin
					10: { length: 900 } // Baraka
				}
			}
		},
		3: { // Lightning Trap
			0: {
				length: 1307.22,
				abnormals: {
					25090: { speed: 0.4 }
				}
			}
		},
		4: { // Arcane Pulse
			'*': {
				length: 1293,
				race: {
					9: { length: 1015 } // Elin
				}
			},
			0: {
				type: 'charging',
				length: [1000, 1000],
				noInterrupt: [7, 26],
				lastChargeStage: 50,
				abnormals: {
					25140: { chargeSpeed: 0.3 }
				}
			},
			10: {
				noInterrupt: [7, 26],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330110 },
							501650: { skill: 330150 }
						}
					}
				}
			},
			11: {
				noInterrupt: [7, 26],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330111 },
							501650: { skill: 330151 }
						}
					}
				}
			},
			12: {
				noInterrupt: [7, 26],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330112 },
							501650: { skill: 330152 }
						}
					}
				}
			}
		},
		5: { // Mana Infusion
			0: { length: 4595.5 }
		},
		6: { // Meteor Strike
			0: {
				length: 3932,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.25 }
				},
				abnormals: {
					25100: { speed: 0.25 },
				},
				race: {
					9: { length: 3700 } // Elin
				},
				level: {
					9: {
						abnormals: {
							500150: { skill: 320100 },
							501650: { skill: 320150 }
						}
					}
				}
			}
		},
		7: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657,
				distance: -200,
				forceClip: true,
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1200,
				abnormals: {
					25070: { speed: 0.25 }
				}
			}
		},
		10: { // Mana Barrier
			0: {
				length: 633,
				/*race: {
					1: {length: 533}
				}*/
			}
		},
		11: { // Lightning Strike
			0: {
				length: 981.4,
				checkReset: true,
				race: {
					7: { length: 979.8 },
					9: { length: 810 } // Elin
				}
			}
		},
		12: { // Void Pulse
			0: { length: 933 } //
		},
		13: { // Mindblast
			0: {
				length: 2462,
				race: {
					7: { length: 2460 },
					9: { length: 2315 } // Elin
				},
				glyphs: {
					25048: { speed: 0.3 }
				},
				abnormals: {
					25110: { speed: 0.4 }
				}
			}
		},
		16: { // Painblast
			0: {
				length: 1608, //
				race: {
					7: { length: 1605 },
					9: { length: 1330 } // Elin
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1106 }
		},
		18: { // Glacial Retreat
			0: {
				CC: "extended",
				length: 1100,
				distance: -187.5,
				forceClip: true
			}
		},
		19: { // Mana Siphon
			'*': {
				length: 900,
				noRetry: true
			},
			0: {
				type: 'charging',
				length: [1000, 1000],
				noInterrupt: [7, 26],
				lastChargeStage: 2000
			},
			10: { noInterrupt: [7, 26] },
			11: { noInterrupt: [7, 26] },
			12: { noInterrupt: [7, 26] }
		},
		20: { // Flaming Barrage
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1501,
				glyphs: {
					25001: { speed: 0.3 },
					25096: { speed: 0.4 } //
				},
				abnormals: {
					25060: { speed: 0.25 } //
				}
			}
		},
		21: { // Nerve Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200],
			}
		},
		22: { // Burning Breath
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200],
			}
		},
		23: { // Mana Volley
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [325, 875],
			}
		},
		25: { // Time Gyre
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 700,
			}
		},
		26: { // Teleport Jaunt
			0: {
				CC: ["evasive", "extended"],
				type: 'teleport',
				length: [200, 266],
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true,
			}
		},
		27: { // Hailstorm
			0: {
				length: 980,
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 }
				}
			}
		},
		30: { // Nova
			0: {
				length: 2858,
				glyphs: {
					25092: { speed: 0.3 }
				}
			}
		},
		31: { // Warp Barrier
			'*': { length: 500 },
			0: true,
			10: true,
			20: true
		},
		32: { // Meteor Shower
			'*': {
				length: 6778.2,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.25 }
				},
				abnormals: {
					25100: { speed: 0.25 },
				},
				race: {
					7: { length: 6774.54 },
					9: { length: 6475.5 } // Elin
				}
			},
			0: true,
			50: {
				length: 3933,
				race: {
					7: { length: 3929.4 }, //Casta F.
					9: { length: 3699 } // Elin
				}
			}
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': {
				length: 1292,
				noRetry: true,
				race: {
					9: { length: 1015 } // Elin
				}
			},
			10: true,
			11: true,
			12: true,
			50: true,
			51: true,
			52: true
		},
		34: { // Mana Boost
			0: {
				length: 633,
				/*race: {
					1: {length: 533}
				}*/
			}
		}
	},
	5: { // Archer
		1: { // Arrow
			0: {
				length: 400,
				noRetry: true
			}
		},
		2: { // Arrow Volley
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [22],
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1233,
				noInterrupt: [22]
			}
		},
		3: { // Radiant Arrow
			'*': {
				length: 1748,
				races: {
					1: { length: 1560 }	// F.Human(Faster but due to SF cancel it ends being as fast as other races)
				}
			},
			0: {
				type: 'charging',
				length: [600, 600, 600],
				noInterrupt: [4, 22],
				lastChargeStage: 2500,
				noRetry: true,
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 600 },
					{ length: [600, 600] },
					{ length: [600, 600] },
				]
			},
			10: {
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori
				}
			}, // Cast F. - TODO
			11: {
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori
				}
			},
			12: {
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori
				}
			},
			13: {
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori
				}
			}
		},
		4: { // Penetrating Arrow
			'*': {
				noInterrupt: [8],
				length: 1294, //1323 for fking elins ...
				races: {
					1: { length: 1275 }, // F.Human
					9: { length: 1323 }	// Elin
				}
			},
			0: {
				type: 'charging',
				length: [800, 800, 800],
				noInterrupt: [3, 22],
				noRetry: true,
				lastChargeStage: 2500,
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 1000 },	// 1400
					{ length: [1000, 1000] },
					{ length: [1000, 1000] },
				]
			},
			10: {
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			}, // Cast F. - TODO
			11: {
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			},
			12: {
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			},
			13: {
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			}
		},
		5: { // Rain of Arrows
			0: {
				length: 3131,
				glyphs: {
					26077: { speed: 0.4 }
				},
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 }
				}
			}
		},
		6: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 670,
				distance: -200,
				noRetry: true,
				forceClip: true,
			}
		},
		7: { // Feign Death
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [2950, 54525, 1675],
				distance: [-114.05, 0, 0]
			}
		},
		8: { // Rapid Fire
			'*': {
				noRetry: true,
				blockCancelPacket: true,
				noInterrupt: [22] // this actually doesn't do anything
			},
			0: {
				length: 433,
				noInterrupt: [6, '8-6']
			},
			1: { length: 600 },
			2: { length: 700 },
			3: { length: 800 },
			4: { length: 700 },
			5: { length: 800 },
			6: { length: 1233 }
		},
		9: { // Slow Trap
			0: { length: 1150 }
		},
		10: { // Stunning Trap
			0: { length: 1150 }
		},
		12: { // Velik's Mark
			0: { length: 200 }
		},
		14: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1620,
				noRetry: true
			}
		},
		15: { // Incendiary Trap
			0: { length: 1149 } //
		},
		16: { // Breakaway Bolt
			0: {
				CC: "extended",
				length: 1340,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: {
				length: 533,
				noInterrupt: [22]
			}
		},
		18: { // Close Quarters
			0: {
				length: 300,
				distance: 89.8	// 89.797
			},
			1: {
				length: 1233,
				distance: 87.29	// 97.292
			}
		},
		19: { // Poison Arrow
			0: {
				length: 1103,
				distance: -12.5,
				noInterrupt: [22],
				abnormals: {
					26100: { speed: 0.25 }
				},
				race: {
					8: { distance: -12.17 } // Popori
				}
			}
		},
		20: { // Restraining Arrow
			0: {
				length: 533,
				noInterrupt: [22]
			}
		},
		21: { // Sniper's Eye
			'*': { length: 625 },
			0: true,
			50: true
		},
		22: { // Sequential Fire
			0: {
				length: 433,
				requiredBuff: 600200,
				noInterrupt: [22],
				noRetry: true
			}
		},
		23: { // Stunning Trap Arrow
			0: { length: 1450 } // 1440
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1225 } // 1215
		},
		29: { // Thunderbolt
			0: {
				length: 3766,
				distance: -100,
				noInterrupt: [22],
				glyphs: {
					26089: { speed: 0.3 },
					26102: { speed: 0.3 }
				},
				race: {
					1: { length: 3560 }, // F.Human(Actually faster even if cancelled with SF, -100ms~ in comparisson at base AS)
					8: { distance: -96.6 } // Popori
				}
			}
		},
		31: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 720] // 700
			}
		},
		32: { // Find Weakness
			0: {
				fixedSpeed: 1,
				length: 200
			}
		},
		33: { // Chase
			0: {
				CC: "evasive",
				type: 'dash',
				fixedSpeed: 1,
				length: 1050, // 950-1025
				distance: 413, // 412.078
				noInterrupt: [33],
			}
		}
	},
	6: { // Priest
		1: { // Divine Radiance
			0: { length: 590 },
			1: { length: 650 },
			2: { length: 720 },
			3: { length: 802 }
		},
		2: { // Regeneration Circle
			0: {
				length: 3150,
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 }
				}
			}
		},
		3: { // Healing Circle
			0: { length: 1750 }
		},
		5: { // Blessing of Shakan
			0: { length: 1294 }
		},
		6: { // Arise
			0: { length: 839 }
		},
		8: { // Mana Infusion
			0: {
				length: 4600,
				glyphs: {
					28044: { speed: 0.25 }
				}
			}
		},
		10: { // Purifying Circle
			0: { length: 1275 }
		},
		11: { // Metamorphic Blast
			0: { length: 820 }
		},
		12: { // Resurrect
			0: {
				length: 5915,
				glyphs: {
					28045: { speed: 0.15 }
				},
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 }
				}
			}
		},
		14: { // Summon: Party
			0: { length: 4500 }
		},
		16: { // Shocking Implosion
			0: { length: 1700 }
		},
		17: { // Prayer of Peace
			0: {
				length: [925, 925, 850],
				glyphs: {
					28021: { speed: 2 }
				}
			}
		},
		18: { // Heal Thyself
			0: {
				withoutWeapon: true,
				length: 1250
			}
		},
		19: { // Focus Heal
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 49487,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1940
			}
		},
		22: { // Kaia's Shield
			0: { length: 650 }
		},
		23: { // Blessing of Balder
			0: { length: 1293 }
		},
		26: { // Fiery Escape
			0: {
				CC: ["evasive", "extended"],
				length: 1125,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			0: {
				length: 2600,
				noInterrupt: [2, 3, 5, 10, 12, 14, 17, 18, 19, 23, 25, 26, 27, '28-10', 34, 38, '41-10'],
				chains: {
					11: 30,
					16: 30,
					29: 30,
					40: 30
				}
			},
			30: { length: 1040 }
		},
		28: { // Mana Charge
			'*': {
				bodyRolls: {
					350708: { chargeSpeed: 0.15 }
				},
				length: 825,
				noRetry: true,
				race: {
					9: { length: 798.3 }
				}
			},
			0: {
				type: 'charging',
				length: [800, 1600],
				noInterrupt: [26, 27, 38],
				lastChargeStage: 3200,
				glyphs: {
					28031: { chargeSpeed: 0.25 }
				}
			},
			10: { noInterrupt: [26, 27, 38] },
			11: { noInterrupt: [26, 27, 38] },
			12: { noInterrupt: [26, 27, 38] }
		},
		29: { // Triple Nemesis
			0: { length: 810 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		32: { // Divine Respite
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [1300, 900]
			}
		},
		33: { // Ishara's Lullaby
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1433]
			}
		},
		34: { // Restorative Burst
			0: { length: 1433 }
		},
		35: { // Energy Stars
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		37: { // Healing Immersion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [37],
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 665,
				distance: -200,
				forceClip: true,
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5900 }
		},
		40: { // Zenobia's Vortex
			0: {
				length: 1080,
				noInterrupt: [40]
			}
		},
		41: { // Divine Intervention
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54440,
				partyOnly: true,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 925,
			}
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			0: { length: 675 },
			1: { length: 675 },
			2: { length: 675 },
			3: { length: 675 }
		},
		2: { // Corruption Ring
			0: {
				type: 'hold',
				length: 10850,
				chainOnRelease: 11
			},
			11: { length: 835 }, // 840
			12: { length: 1300 }
		},
		4: { // Ancient Binding
			0: { length: 1280 }
		},
		5: { // Titanic Favor
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1940,
			}
		},
		6: { // Shara's Lash
			0: { length: 1300 }
		},
		8: { // Metamorphic Blast
			0: {
				length: 820,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, 21, '18-10', '22-10', 37, '41-10', 43], // The skill behaves the same way Metamorphic Smite does from lvls 1 to 10 then at lvl 11 it loses its cancelling properties
				checkReset: true,
				chains: {
					8: 30,
					23: 30
				}
			},
			30: { length: 820 }
		},
		9: { // Arun's Cleansing
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 790,
			}
		},
		10: { // Resurrect
			0: {
				length: 8070, // 8050, 8060 //
				glyphs: {
					27049: { speed: 0.2 },
					27079: { speed: 0.2 }
				},
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4400 }
		},
		12: { // Vow of Rebirth
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true,
				partyOnly: true

			},
			10: {
				type: 'lockonCast',
				length: 1940,
			}
		},
		13: { // Aura of the Merciless
			'*': { length: 1300 },
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			'*': { length: 1300 },
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			'*': { length: 1300 },
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			'*': { length: 1300 },
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				CC: ["evasive", "extended"],
				type: 'teleport',
				length: [200, 266],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true,
				checkReset: true

			}
		},
		18: { // Arun's Vitae
			'*': {
				noInterrupt: [8, 17, 23],
				noRetry: true
			},
			0: {
				type: 'charging',
				length: 1240,
				chargeLevels: [10, 10],
				lastChargeStage: 10
			},
			10: {
				length: 850,
				abnormals: {
					27070: { speed: 0.25 },
					27080: { speed: 0.25 }
				}
			}
		},
		21: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1625,
				noRetry: true
			}
		},
		22: { // Arun's Tears
			'*': {
				noInterrupt: [8, 17, 23],
				noRetry: true
			},
			0: {
				type: 'charging',
				length: 1240,
				chargeLevels: [10, 10],
				lastChargeStage: 10
			},
			10: {
				length: 850, // 810 female high elf
				abnormals: {
					27100: { speed: 0.25 }
				}
			}
		},
		23: { // Metamorphic Smite
			0: {
				length: 1430,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, '18-10', 21, '22-10', 23, 37, '41-10', 43],
				chains: {
					8: 30
				}
			},
			30: { length: 1100 }
		},
		24: { // Volley of Curses
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [525, 675],
			}
		},
		25: { // Thrall of Protection
			0: {
				fixedSpeed: 1,
				length: [1000, 1720]
			}
		},
		27: { // Thrall of Life
			0: {
				fixedSpeed: 1,
				length: [230, 470]
			}
		},
		28: { // Sonorous Dreams
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430,
			}
		},
		29: { // Regression
			fixedSpeed: 1,
			length: [500, 700]
		},
		30: { // Curse of Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430,
			}
		},
		31: { // Curse of Confusion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430,
			}
		},
		32: { // Mire
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		33: { // Thrall of Vengeance
			0: {
				fixedSpeed: 1,
				length: [275, 575]
			}
		},
		34: { // Thrall of Wrath
			0: {
				fixedSpeed: 1,
				length: [1000, 1700]
			}
		},
		35: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		36: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		37: { // Warding Totem
			0: { length: 1900 }
		},
		41: { // Contagion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1000
			}
		},
		42: { // Boomerang Pulse
			0: {
				length: 550,
				noInterrupt: [42]
			}
		},
		43: { // Release
			0: { length: [400, 575] }
		}
	},
	8: { // Reaper
		'*': { consumeAbnormal: [10151020, 10151021, 10151022, 10141023] },
		1: { // Spiral Barrage
			'*': {
				length: 1000,
				distance: 48,
				inPlace: {
					movement: [{
						duration: 766,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				noInterrupt: [3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 20, 40],
				abnormals: {
					10151020: { chain: 2 },
					10151021: { chain: 3 },
					10151022: { chain: 4 },
					10151023: { chain: 5 }
				},
				chains: { 1: 1 }, // 1 to 1 :thinking:
				noRetry: true
			},
			0: { triggerAbnormal: { 10151020: 2000 } },
			1: { triggerAbnormal: { 10151020: 2000 } },
			2: {
				length: 1200,
				distance: 42,
				inPlace: {
					movement: [{
						duration: 950,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151021: 2000 },
			},
			3: {
				length: 860,
				distance: 56,
				inPlace: {
					movement: [{
						duration: 616,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151022: 1800 },
			},
			4: {
				length: 1400,
				distance: 60,
				inPlace: {
					movement: [{
						duration: 1150,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151023: 2000 },
			},
			5: {
				length: 1900,
				distance: 91,
				inPlace: {
					movement: [{
						duration: 2016,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				}
			}
		},
		3: { // Double Shear
			'*': {
				length: 2025,
				noInterrupt: ['1-0', '1-2', 3, 4, 12, 13, 14, 20],
				abnormals: {
					29030: { speed: 0.25 }
				},
				chains: {
					1: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Sundering Strike
			'*': {
				noInterrupt: [1, 4, 8, 9, 10, 11, 12, 13, 20],
				chains: {
					1: null,
					3: null,
					//4: null,
					5: null,
					6: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null
				},
				noRetry: true
			},
			0: {
				length: [1175, 1750, 1025],
				distance: [0, 100, 0],
				inPlace: {
					movement: [
						[],
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			30: {
				length: [1750, 1025],
				distance: [100, 0],
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			}
		},
		5: { // Grim Strike
			'*': {
				blockCancelPacket: true,
				distance: [120, 0],
				inPlace: {
					movement: [
						[{
							duration: 2416,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[{
							duration: 1065,
							speed: 1,
							unk: 1,
							distance: 0
						}]
					],
					distance: [0, 0]
				}
			},
			0: {
				length: [2400, 975],
				noInterrupt: ['1-0', '1-2', 4, 12, 14, 20],
				chains: {
					1: 30,
					3: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			30: { length: [1450, 975] }
		},
		6: { // Death Spiral
			'*': {
				length: 1250,
				abnormals: {
					10151131: { chain: 31 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					'6-0': 31,
					'6-30': 31,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					20: 30
				},
				noRetry: true
			},
			0: {
				triggerAbnormal: { 10151131: 6000 }, // We emulated for two reasons, 1. Other skills precise it to chain and 2. It's possible to send second casts without the abnormal in the server, resulting in ghosting.
				noRetry: true
			},
			30: {
				triggerAbnormal: { 10151131: 6000 },
				noRetry: true
			},
			31: {
				consumeAbnormal: 10151131
			}
		},
		8: { // Whipsaw
			'*': {
				length: 2500,
				noInterrupt: [4, 5, 6, 8, 9, 11, 12, 14, 20],
				chains: {
					1: 30,
					3: 30,
					10: 30
				}
			},
			0: true,
			30: true
		},
		9: { // Smite
			0: {
				CC: ["evasive", "extended"],
				length: 1725,
				distance: 168,
				inPlace: {
					movement: [{
						duration: 1832,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 20]
			}
		},
		10: { // Pendulum Strike
			'*': {
				CC: "extended",
				length: 1000,
				distance: -200,
				noInterrupt: [10],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					11: 30,
					12: 30,
					14: 30
				}
			},
			0: true,
			30: true
		},
		11: { // Shadow Lash
			'*': {
				length: 1250, // Length for any stage unless the stage itself has one stated already
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 40]
			},
			0: {
				length: 2150, // Specific length for stage 0
				triggerAbnormal: { 10151040: 2000 },
				abnormals: {
					10151040: { chain: 1 },
					10151041: { chain: 2 },
					10151042: { chain: 3 }
				},
				noRetry: true
			},
			1: {
				triggerAbnormal: { 10151041: 2000 },
				consumeAbnormal: 10151040
			},
			2: {
				triggerAbnormal: { 10151042: 2000 },
				consumeAbnormal: 10151041
			},
			3: { consumeAbnormal: 10151042 }
		},
		12: { // Shadow Burst
			'*': {
				glyphs: {
					29026: { speed: 0.25 }
				},
				chains: { '12-0': 1 }
			},
			0: {
				triggerAbnormal: { 10151150: 3000 },
				consumeAbnormalEnd: 10151150,
				length: 3225,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 14, 20],
			},
			1: {
				length: 2025,
			}
		},
		14: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1600,
				noRetry: true
			}
		},
		15: { // Retribution
			0: {
				CC: "extended",
				fixedSpeed: 1,
				length: 1575,
			}
		},
		16: { // Shadow Reaping
			0: {
				fixedSpeed: 1,
				length: 775
			}
		},
		18: { // Shrouded Escape
			0: {
				CC: ["evasive", "extended"],
				length: 850,
				distance: 150,
			}
		},
		40: { // Shadow Step
			'*': {
				CC: ["evasive", "extended"],
				length: 700,
				distance: 180,
				forceClip: true,
				abnormals: {
					10151000: { chain: 30 }
				}
			},
			0: true,
			30: true
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152000, 10152001, 10152010, 10152011, 10152012, 10152050, 10152053, 10152054, 10152084, 10152085, 10152086] },
		1: { // Blast
			'*': {
				triggerAbnormal: { 10152011: 3100 },
				fixedSpeed: 1,
				noRetry: true,
				length: 1195,
				noInterrupt: [1],
				projectiles: [20]
			},
			1: true,
			2: { noRetry: true },
			20: {
				type: 'userProjectile',
				flyingSpeed: 800,
				flyingDistance: 500
			}
		},
		2: { // Bombardment
			'*': {
				consumeAbnormal: [10152081, 10152010, 10152040],
			},
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			1: {
				type: 'lockonCast',
				triggerAbnormal: { 10152082: 4100 },
				length: 2999,
				glyphs: {
					30004: { speed: 0.25 }
				}
			}
		},
		3: { // Scattershot
			'*': {
				triggerAbnormal: { 10152083: 4100 },
				consumeAbnormal: 10152080, // Chain Display
				length: 1725,
				distance: -108,
				noInterrupt: [3, 20],
				glyphs: {
					30007: { // The server also sends 30030 when active
						movement: [
							{
								duration: 394,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 111,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 1333,
								speed: 1.8,
								unk: 1,
								distance: 64.8
							}
						],
						distance: 0.6
					}
				},
				chains: {
					'2-1': 30,
					4: 30,
					'7-3': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		4: { // Point Blank
			'*': {
				consumeAbnormal: 10152083,
				length: 1532,
				distance: 137.88,
				noInterrupt: [20],
				chains: {
					'2-1': 30,
					3: 30,
					'4-1': 4,
					'4-2': 4,
					'4-30': 4,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				},
				/*abnormals: {
					//10152000: { chain: 3 }, .......................................................
					10152010: { chain: 2 },
					10152011: { chain: 2 }
				}*/
			},
			1: {
				triggerAbnormal: {
					10152000: 2100,
					10152001: 2100
				},
				noInterrupt: [4]
			},
			2: {
				triggerAbnormal: {
					10152000: 2100,
					10152001: 2100
				},
				noInterrupt: [4]
			},
			3: {
				length: 1195,
				distance: -198.53 // Not possible to correctly emulate but needed for chaining
			},
			4: {
				triggerAbnormal: { 10152002: 4100 },
				length: 1195,
				distance: -198.53
			},
			30: {
				noInterrupt: ['4-30'],
				triggerAbnormal: {
					10152000: 2100,
					10152001: 2100
				}
			}
		},
		5: { // Burst Fire
			'*': {
				consumeAbnormal: [10152081, 10152010, 10152040],
				bodyRolls: {
					350905: { stamina: -5 }
				},
				blockCancelPacket: true,
				noInterrupt: ['9-0'],
				chains: {
					'5-0': 1
				}
			},
			0: {
				triggerAbnormal: { 10152053: 2100 }, //
				length: 855,
				noRetry: true
			},
			1: {
				triggerAbnormal: {
					10152050: 1200, //
					10152054: 1200 //
				},
				fixedSpeed: 1,
				length: 125,
				stamina: 70,
				instantStamina: true,
				glyphs: {
					30046: { stamina: -10 }
				},
				level: [
					{ stamina: 50 },
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 }
				]
			}
		},
		6: { // Time Bomb
			'*': {
				triggerAbnormal: {
					10152010: 3100,
					10152084: 4100
				},
				fixedSpeed: 1,
				length: 1000,
				projectiles: [20]
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 800
			}
		},
		7: { // Arcane Barrage
			'*': {
				length: 1533,
				chains: {
					5: 1
				}
			},
			1: {
				triggerAbnormal: {
					//30050: 3100, // AS Buff
					10152010: 3100,
					10152040: 3100
				},
				triggerAbnormalEnd: { 10152081: 4100 },
				consumeAbnormal: 10152072,
				fixedSpeed: 1,
				noInterrupt: [7],
				noRetry: true
			},
			2: {
				triggerAbnormal: {
					10152010: 3100,
					10152040: 3100
				},
				triggerAbnormalEnd: { 10152081: 4100 },
				consumeAbnormal: 10152072,
				fixedSpeed: 1,
				noInterrupt: [7],
				noRetry: true
			},
			3: {
				consumeAbnormal: [10152040],
				noInterrupt: ['7-3'],
				length: 1200
			}
		},
		9: { // Mana Missiles
			'*': {
				length: 1200,
				noInterrupt: [20]
			},
			0: {
				triggerAbnormal: { 10152085: 4100 },
				type: 'charging',
				length: 1200,
				lastChargeStage: 0
			},
			10: {
				triggerAbnormal: { 10152085: 4100 },
				distance: -50,
				noRetry: true,
				projectiles: [21, 22]
			},
			11: {
				triggerAbnormal: { 10152085: 4100 },
				distance: -100,
				noRetry: true,
				projectiles: [21, 22, 23, 24, 25]
			},
			21: {
				type: 'userProjectile',
				flyingSpeed: 600,
				flyingDistance: 750
			},
			22: {
				type: 'userProjectile',
				flyingSpeed: 500,
				flyingDistance: 750
			},
			23: {
				type: 'userProjectile',
				flyingSpeed: 400,
				flyingDistance: 750
			},
			24: {
				type: 'userProjectile',
				flyingSpeed: 350,
				flyingDistance: 750
			},
			25: {
				type: 'userProjectile',
				flyingSpeed: 300,
				flyingDistance: 750
			}
		},
		10: { // Arc Bomb
			'*': {
				//triggerAbnormal: { 10152086: 4100 },
				consumeAbnormal: 10152083,
				length: 1320,
				noInterrupt: [10, 20],
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					5: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					//10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				},
				noRetry: true
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 700,
				flyingDistance: 350
			},
			30: true
		},
		11: { // Rocket Jump
			'*': {
				CC: ["evasive", "extended"],
				triggerAbnormal: { 10152087: 4100 },
				length: 1400,
				noInterrupt: [3, 11, 15, 20],
				distance: 415.45,
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					'10-11': 30,
					13: 30,
					19: 30,
					40: 31
				}
			},
			1: true,
			2: true,
			30: true,
			31: {
				length: 1675,
				distance: 506.27,
				race: {
					7: { // Female Castanic
						length: 1700,
						distance: 503.64
					}
				}
			}
		},
		/*-		13: { // Balder's Vengeance (old version)
					'*': {
						triggerAbnormal: { 10152097: 4000 }, // someone ples fix shit skill AaaaA
						consumeAbnormalEnd: 10152097,
						length: 5800,
						distance: -269.09,
						//noInterrupt: [13],
						chains: {
							'2-1': null,
							3: null,
							4: null,
							5: null,
							'7-3': null,
							'9-10': null,
							'9-11': null,
							10: null,
							11: null,
							13: null,
							15: null,
							19: null,
							40: null
						},
						noRetry: true
					},
					1: true,
					2: true,
					30: true
				},*/
		13: { // Balder's Vengeance
			'*': {
				length: 5800,
				distance: -269.09,
				noInterrupt: [13],
				abnormals: {
					10152010: { chain: 2 }, //
					10152011: { chain: 2 } // Must only trigger if currenaction won't result in a chain
				},
				chains: {
					'2-1': null,
					3: null,
					4: null,
					5: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				},
				noRetry: true
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Replenishment
			'*': {
				consumeAbnormal: 10152083,
				triggerAbnormal: { 10152072: 4100 },
				fixedSpeed: 1, // The server sends 30090 500 when using the +50 will glyph
				length: 1320,
				noInterrupt: [15, 20],
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					//15: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		18: { // HB
			'*': {// 10152251 2147483647
				fixedSpeed: 1,
				length: 1433,
				noInterrupt: [18]
			},
			1: true,
			2: true
		},
		19: { // ST
			'*': {
				length: 1325,
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					//19: null,
					40: null
				},
				noRetry: true
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 700,
				flyingDistance: 450
			},
			30: true
		},
		20: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1500,
				noRetry: true
			}
		},
		40: { // Rolling Reload
			0: {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 935,
				noInterrupt: [11],
				distance: 172.5,
				triggerAbnormal: {
					10152010: 3100, // "chains"
					10152012: 3100,
					10152071: 3100,
					10152080: 4100
				},
				forceClip: true
			}
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': {
				length: 1575,
				distance: 71.28,
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					'2-2': 31,
					'2-3': 31,
					2: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1575, // is this needed?
				distance: 68.63
			},
			2: {
				length: 925,
				distance: 50.7
			},
			3: {
				length: 1725,
				distance: 121
			},
			30: true,
			31: true,
			32: {
				length: 1575, // is this needed?
				distance: 68.63
			}
		},
		2: { // Counter
			'*': {
				CC: "extended",
				noRetry: true
			},
			1: {
				length: 1200,
				distance: 139.97,
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001
			},
			2: {
				length: 1800,
				distance: 84,
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				length: 1925,
				distance: 131.2,
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				length: 1950,
				distance: 142.86,
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006
			},
			11: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005
			},
			12: {
				/*abnormals: {
					10153061: { chain: 1 },
					10153062: { chain: 2 },
					10153063: { chain: 3 },
					10153064: { chain: 4 }
				},*/
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-3': 4,
					'1-30': 1,
					'1-31': 1,
					'1-32': 2
				}
			}
		},
		4: { // Ground Pound
			'*': {
				CC: "extended",
				length: 3225,
				chains: {
					5: 30,
					6: 30,
					6: 30,
					8: 30,
					9: 30
				}
			},
			0: true,
			30: true
		},
		5: { // Bullrush
			0: {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: [2950, 650],
				distance: [0, 135],
			}
		},
		6: { // Haymaker
			'*': {
				length: [1025, 1825],
				distance: [0, 171.61],
				abnormals: {
					31120: { chain: 31 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			'*': {
				length: 860,
				distance: 105,
				noInterrupt: [7],
				chains: {
					2: 30,
					4: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30

				},
				hasChains: true
			},
			0: true,
			30: true
		},
		8: { // Piledriver
			'*': {
				length: 1950,
				distance: 164.94,
				abnormals: {
					31120: { chain: 31 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		9: { // Jackhammer
			'*': {
				fixedSpeed: 1,
				length: 1540,
				distance: 40,
				noInterrupt: [9],
				abnormals: {
					31120: { chain: 31 }

				},
				chains: {
					'2-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					10: 30
				},
				hasChains: true
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				CC: "extended",
				length: 1855,
				distance: 155,
				requiredBuff: 10153000,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Provoke
			'*': {
				fixedSpeed: 1,
				length: 1291
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': { length: 1650 },
			1: true,
			2: true,
			30: true
		},
		16: { // Flip Kick
			'*': {
				length: 2066,
				distance: 134,
				chains: {
					4: 30
				},
				hasChains: true
			},
			1: true,
			2: true,
			30: true
		},
		21: { // Mounting Rage
			'*': {
				fixedSpeed: 1,
				length: 1275
			},
			1: true,
			2: true
		},
		40: { // Quick Dash
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 580,
				distance: 144,
				forceClip: true,
				hasChains: true,
				noRetry: true,
			},
			0: true, // TODO: Figure out which animations are correct
			1: true,
			30: true,
			31: true
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006, 10154081, 10154082, 10154085] },
		1: { // Combo Attack
			'*': {
				fixedSpeed: 1,
				length: 650,
				distance: 44.86,
				triggerAbnormal: { 10154000: 1650 },
				noRetry: true
			},
			0: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: {
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			2: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			3: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			4: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			5: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			6: {
				length: 1150,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			30: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				}
			},
			40: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				},
				chains: {
					1: 70,
					3: 70,
					4: 70,
					6: 70,
					7: 70,
					9: 70,
					12: 70,
					13: 70,
					14: 70,
					15: 70,
					16: 70,
					18: 70,
					19: 70,
					20: 70
				}
			},
			41: {
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			42: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			43: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			44: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			45: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			46: {
				length: 1150,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			70: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				}
			}
		},
		2: { // Shadow Jump
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 650.3,
				distance: 175,
				forceClip: true,
				abnormals: {
					10154010: { chain: 30 }
				}
			},
			0: true,
			30: true
		},
		3: { // Leaves on the Wind
			'*': {
				length: 1272.72,
				noInterrupt: [3],
				chains: {
					1: null,
					2: 30,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null, // reeeeeeeeee
					9: null,
					10: null,
					12: null,
					13: null, // eeeeeeeeeeee
					14: null,
					15: null,
					16: null,
					//17: 30,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		4: { // Jagged Path
			1: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				length: 665,
				distance: 469,
				noInterrupt: [4],
			},
			10: { length: 1500 },
			11: {
				length: 300,
				distance: 150
			}
		},
		5: { // Impact Bomb
			'*': {
				CC: ["evasive", "extended"],
				length: 1022,
				distance: -291.6,
				noInterrupt: [5],
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					19: null,
					20: null
				},
				forceClip: true,
				noRetry: true,
			},
			0: true,
			30: true
		},
		6: { // One Thousand Cuts
			'*': {
				CC: ["evasive", "extended"],
				length: 430,
				chains: { // Needed to state we want to trigger substage 4, else it will trigger 6
					1: 30,
					5: 30,
					4: 30,
					7: 30,
					8: 30, //sometimes uses it, sometimes it doesn't
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				},
			},
			0: true,
			1: { // 0/30(iframe) -> 1(dash, also iframes) -> 10(deeps, doesn't iframe in the very beginning) 
				type: 'dash',
				fixedSpeed: 1,
				length: 300,
				distance: 246
			},
			10: { length: 3516 },
			30: true
		},
		7: { // Decoy Jutsu
			0: {
				CC: ["evasive", "extended"],
				length: 1550,
				onlyTarget: true,
				noInterrupt: [7],
			}
		},
		8: { // Fire Avalanche
			'*': {
				triggerAbnormal: { 10154080: 10000 },
				length: [700, 1375, 325],
				distance: [0, 367.31, 0],
				abnormals: {
					10154080: { chain: 1 },
					10154081: { chain: 2 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				triggerAbnormal: { 10154081: 5000 },
				length: [1375, 325],
				distance: [411.39, 0]
			},
			2: {
				triggerAbnormal: { 10154082: 1 },
				length: [1375, 325],
				distance: [455.47, 0]
			},
			30: true
		},
		9: { // Smoke Bomb
			'*': {
				length: 722,
				chains: {
					1: null,
					2: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					19: null,
					20: null
				},
			},
			0: {
				CC: "evasive"
			},
			30: true
		},
		10: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		11: { // Focus
			'*': {
				length: 1431,
				noInterrupt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			},
			0: true,
			50: true
		},
		12: { // Skyfall
			'*': {
				length: 1320,
				distance: 154.72,
				chains: {
					1: 30,
					2: 30, // Rarely triggers, does not affect its normal usage
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					18: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		13: { // Circle of Steel
			'*': {
				length: 3210,
				distance: 245.06,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		14: { // Double Cut
			'*': {
				length: 1429,
				distance: 162,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Burning Heart
			'*': {
				length: 400,
				stamina: 100,
				instantStamina: true,
				abnormals: {
					32033: { speed: 0.2 },
					32058: { speed: 0.3 }
				}
			},
			0: {
				triggerAbnormal: {
					10154060: 1300,
					10154100: 2000,
					10154101: 2000
				},
				length: 900
			},
			1: {
				triggerAbnormal: { 10154061: 850 },
				consumeAbnormal: 10154060
			},
			2: {
				triggerAbnormal: { 10154062: 850 },
				consumeAbnormal: 10154061
			},
			3: {
				triggerAbnormal: { 10154063: 850 },
				consumeAbnormal: 10154062
			},
			4: {
				triggerAbnormal: { 10154064: 850 },
				consumeAbnormal: 10154063
			},
			5: {
				triggerAbnormal: { 10154065: 850 },
				consumeAbnormal: 10154064
			},
			6: {
				triggerAbnormal: { 10154066: 850 },
				consumeAbnormal: 10154065
			},
			7: {
				triggerAbnormal: { 10154067: 850 },
				consumeAbnormal: 10154066
			},
			8: {
				triggerAbnormal: { 10154068: 850 },
				consumeAbnormal: 10154067
			},
			9: {
				triggerAbnormal: { 10154069: 850 },
				consumeAbnormal: 10154068
			},
		},
		16: { // Death Blossom
			'*': {
				fixedSpeed: 1,
				length: 1532.3,
				noInterrupt: [16],
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		17: { // Attunement
			'*': {
				length: 995,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		18: { // Bladestorm
			'*': {
				length: 1016.5,
				distance: 68.535,
				noInterrupt: [18],
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		19: { // Chakra Thrust
			'*': {
				length: [225, 825],
				distance: 132.99,
				noInterrupt: [19],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Clone Jutsu
			0: {
				fixedSpeed: 1,
				length: 1258
			}
		}
	},
	12: { // Valkyrie
		1: { // Slash
			'*': {
				length: 1107,
				distance: 47.13,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1200,
				distance: 43.37
			},
			2: {
				length: 1454,
				distance: 58.54
			},
			3: {
				length: 1928,
				distance: 90.1
			},
			30: true
		},
		2: { // Overhead Slash
			'*': {
				length: 1917,
				distance: 102.47,
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		3: { // Glaive Strike
			'*': {
				length: 2457,
				distance: 105.62,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Charge
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 550,
				distance: 436,
				//noInterrupt: ['4-0', '4-10', '4-11'],
				noRetry: true
			},
			10: { length: 900 },
			11: {
				length: 400,
				distance: 50,
				noInterrupt: [1, 2, '4-11', 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21]
			}
		},
		5: { // Maelstrom
			'*': {
				length: 3145,
				distance: 125.11,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		6: { // Leaping Strike
			'*': {
				length: 1775,
				distance: 105,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,
					5: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		7: { // Spinning Death
			'*': {
				length: 1786,
				distance: 139.72,
				noInterrupt: ['7-2'],
				abnormals: {
					10155070: { chain: 1 },
					10155071: { chain: 2 }
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: true,
			2: {
				length: 2293,
				distance: 197.82
			},
			30: true
		},
		8: { // Titansbane
			'*': {
				fixedSpeed: 1,
				length: 7702,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 1,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			1: { length: 2000 },
			30: true
		},
		9: { // Ground Bash
			'*': {
				length: 1459,
				distance: 136,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		10: { // Dream Slash // need to check chains
			'*': {
				length: 1773,
				distance: 11.78,
				noInterrupt: [10],
				glyphs: {
					33020: { speed: 0.2 }
				},
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					//17: 30, // Not correct since still triggers substage 4 on them.
					18: null,
					19: null,
					20: null,
					//21: 30 //  But for now it works /shrug
				}
			},
			0: true,
			30: true // if we add a chain to a skill that we want to trigger substage 4 on, it will break, ghosting if there's no fast enough server response.
		},
		11: { // Shining Crescent
			'*': {
				length: 2725,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: {
				distance: 227.49,
				noInterrupt: [11]
			},
			1: {
				length: 2500,
				chains: {
					1: 31,
					2: 31,
					3: 31,
					4: 31,
					5: 31,
					6: 31,
					7: 31,
					8: 31,
					9: 31,
					10: 31,
					11: 31,
					12: 31,
					13: 31,
					14: 31,
					15: 31,
					16: 31,
					19: 31,
					20: 31
				}
			},
			30: { distance: 227.49 },
			31: { length: 2500 }
		},
		12: { // Ragnarok
			'*': {
				length: 2810,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Bloodflower
			'*': {
				length: 1700,
				distance: 20.57,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		14: { // Evasion
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 825,
				distance: 188.18,
				forceClip: true,
			},
			0: { triggerAbnormal: { 10155020: 4000 } },
			1: {
				consumeAbnormal: 10155020,
				requiredBuff: 10155020
			}
		},
		15: { // Windslash
			'*': {
				length: 1100,
				distance: 152.82,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		16: { // Runeburst
			'*': {
				fixedSpeed: 1,
				length: 1327,
				distance: 25,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		17: { // Balder's Tears
			0: {
				fixedSpeed: 1,
				length: 1075
			}
		},
		/*18: { // Retaliate
			0: { 
				type: 'retaliate',
				length: 1630,
				noRetry: true 
			}
		},*/
		19: { // Reclamation
			'*': {
				length: 1525,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					//19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Backstab
			0: {
				CC: ["evasive", "extended"],
				length: 1490,
				onlyTarget: true
			}
		},
		21: { // Dark Herald
			0: {
				fixedSpeed: 1,
				length: 922,
				requiredBuff: 10155201
			}
		}
	}
}
