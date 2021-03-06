/*
 * Copyright (c) 2018, The Modern Way. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.themodernway.api.gateway.rest.services

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Service

import com.themodernway.server.core.file.vfs.IFolderItem
import com.themodernway.server.core.json.JSONObject
import com.themodernway.server.rest.IRESTRequestContext
import com.themodernway.server.rest.RESTServiceSupport
import com.themodernway.server.rest.RequestBinding
import com.themodernway.server.rest.RequestMethod

import groovy.transform.CompileStatic
import groovy.transform.Memoized

@Service
@CompileStatic
@RequestMethod(HttpMethod.GET)
@RequestBinding('/demo/code_new')
class GetCodeNew extends RESTServiceSupport
{
    @Override
    def call(final IRESTRequestContext context, final JSONObject object) throws Exception
    {
        def code = ['/code/AdminOnly.groovy', '/code/AlwaysThrow.groovy', '/code/FindUserByNameService.groovy', '/code/GetEndpoints.groovy', '/code/IncrementUser.groovy', '/code/IncrementUserByNameService.groovy', '/code/Limited.groovy', '/code/PostBack.groovy']

        def root = getRoot()

        def vals = code.collect { String name ->

            def snip = 'oops'

            def file = root.find(name)

            if (file && file.isReadable())
            {
                snip = file.getContentAsString()
            }
            json(name, snip)
        }
        json(code: vals)
    }

    @Memoized
    IFolderItem getRoot()
    {
        getFileItemStorage('content').getRoot()
    }
}

