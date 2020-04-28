(function() {var implementors = {};
implementors["ra_db"] = [{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_db/struct.SourceDatabaseStorage.html\" title=\"struct ra_db::SourceDatabaseStorage\">SourceDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_db/trait.SourceDatabase.html\" title=\"trait ra_db::SourceDatabase\">SourceDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_db/struct.SourceDatabaseStorage.html\" title=\"struct ra_db::SourceDatabaseStorage\">SourceDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_db::SourceDatabaseStorage"]},{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_db/struct.SourceDatabaseExtStorage.html\" title=\"struct ra_db::SourceDatabaseExtStorage\">SourceDatabaseExtStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_db/trait.SourceDatabaseExt.html\" title=\"trait ra_db::SourceDatabaseExt\">SourceDatabaseExt</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_db/struct.SourceDatabaseExtStorage.html\" title=\"struct ra_db::SourceDatabaseExtStorage\">SourceDatabaseExtStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_db::SourceDatabaseExtStorage"]}];
implementors["ra_hir_def"] = [{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.InternDatabaseStorage.html\" title=\"struct ra_hir_def::db::InternDatabaseStorage\">InternDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_hir_def/db/trait.InternDatabase.html\" title=\"trait ra_hir_def::db::InternDatabase\">InternDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.InternDatabaseStorage.html\" title=\"struct ra_hir_def::db::InternDatabaseStorage\">InternDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_hir_def::db::InternDatabaseStorage"]},{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_hir_def::db::DefDatabaseStorage"]}];
implementors["ra_hir_expand"] = [{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_hir_expand::db::AstDatabaseStorage"]}];
implementors["ra_hir_ty"] = [{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_hir_ty::db::HirDatabaseStorage"]}];
implementors["ra_ide_db"] = [{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_ide_db/symbol_index/struct.SymbolsDatabaseStorage.html\" title=\"struct ra_ide_db::symbol_index::SymbolsDatabaseStorage\">SymbolsDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_ide_db/symbol_index/trait.SymbolsDatabase.html\" title=\"trait ra_ide_db::symbol_index::SymbolsDatabase\">SymbolsDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_ide_db/symbol_index/struct.SymbolsDatabaseStorage.html\" title=\"struct ra_ide_db::symbol_index::SymbolsDatabaseStorage\">SymbolsDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_ide_db::symbol_index::SymbolsDatabaseStorage"]},{"text":"impl&lt;DB__&gt; QueryGroup&lt;DB__&gt; for <a class=\"struct\" href=\"ra_ide_db/struct.LineIndexDatabaseStorage.html\" title=\"struct ra_ide_db::LineIndexDatabaseStorage\">LineIndexDatabaseStorage</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: <a class=\"trait\" href=\"ra_ide_db/trait.LineIndexDatabase.html\" title=\"trait ra_ide_db::LineIndexDatabase\">LineIndexDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_ide_db/struct.LineIndexDatabaseStorage.html\" title=\"struct ra_ide_db::LineIndexDatabaseStorage\">LineIndexDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB__: Database,&nbsp;</span>","synthetic":false,"types":["ra_ide_db::LineIndexDatabaseStorage"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()